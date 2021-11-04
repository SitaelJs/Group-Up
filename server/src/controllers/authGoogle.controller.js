require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const { User } = require('../db/models');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, URL_BACK_SERVER, URL_FRONT_SERVER } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${URL_BACK_SERVER}/auth/google/callback`,
      passReqToCallback: true,
    },

    async (request, accessToken, refreshToken, profile, done) => done(null, profile)
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

const authGoogleResponse = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session?.user.id } });
    const { id, nickname, email, steamID } = user;
    req.session.user = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      steamID: user.steamID,
    };
    res.json({ id, nickname, email, steamID });
  } catch (error) {
    res.sendStatus(500);
  }
};

const authGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const authGoogleCallback = passport.authenticate('google', {
  successRedirect: `${URL_BACK_SERVER}/auth/google/success`,
  failureRedirect: `${URL_BACK_SERVER}/auth/google/failed`,
});

const ifFailed = (req, res) => {
  res.send('Failed');
};

const ifSuccess = async (req, res) => {
  const user = await User.findOne({ where: { id: req.session?.user.id } });
  req.session.user = { id: user.id, nickname: user.nickname, email: user.email };
  res.redirect(`${URL_FRONT_SERVER}`);
};

const authGoogleLogout = (req, res) => {
  console.log(123);
  req.session = null;
  res.clearCookie('sessionId');
  req.logout();
  res.sendStatus(200);
};

module.exports = {
  authGoogle,
  authGoogleCallback,
  authGoogleLogout,
  ifSuccess,
  ifFailed,
  authGoogleResponse,
};
