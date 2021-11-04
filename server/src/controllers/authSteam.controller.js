require('dotenv').config();
const SteamAPI = require('steamapi');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

const { STEAM_TOKEN, URL_BACK_SERVER, URL_FRONT_SERVER } = process.env;
const steam = new SteamAPI(STEAM_TOKEN);
const { User } = require('../db/models');

passport.use(
  new SteamStrategy(
    {
      returnURL: `${URL_BACK_SERVER}/auth/steam/return`,
      realm: `${URL_BACK_SERVER}`,
      apiKey: STEAM_TOKEN,
    },
    (identifier, profile, done) => {
      done(null, profile);
    }
  )
);
const getSteam = passport.authenticate('steam', { failureRedirect: '/' });

const returnSteam = passport.authenticate('steam', {
  successRedirect: `${URL_BACK_SERVER}/auth/steam/success`,
});

const steamSuccess = async (req, res) => {
  try {
    const user = await User.findOne(
      { steamID: req.session.passport.user.id },
      { where: { id: req.session.user.id } }
    );
    user.steamID = req.session.passport.user.id;

    await user.save();
    req.session.user = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      steamID: user.steamID,
    };
    res.redirect(`${URL_FRONT_SERVER}/users/done`);
  } catch (error) {
    res.sendStatus(500);
  }
};

// const test = async (req, res) => {
//   steam.resolve('https://steamcommunity.com/id/DmROSs').then((id) => {
//     console.log(id); // 76561198146931523
//   });
//   res.sendStatus(200);
// };

// const localCheck = async (req, res) => {
//   try {
//     const user = await User.findOne({ where: { id: req.session.user.id } });
//     return res.json(user);
//   } catch (error) {
//     return res.sendStatus(500);
//   }
// };

module.exports = { returnSteam, getSteam, steamSuccess };
