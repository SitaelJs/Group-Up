require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const { User } = require('../db/models');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// console.log(88888888888);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
    },

    (request, accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  // console.log(user,'-------');
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

const authGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const authGoogleCallback = passport.authenticate('google', {
  successRedirect: '/auth/google/success',
  failureRedirect: '/auth/google/failed',
});

const ifFailed = (req, res) => {
  res.send('Failed');
};

const ifSuccess = (req, res) => {
  res.send(`Welcome`);
};

const authGoogleLogout = (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
};

module.exports = {
  authGoogle,
  authGoogleCallback,
  authGoogleLogout,
  ifSuccess,
  ifFailed,
};
