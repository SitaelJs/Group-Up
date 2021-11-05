// const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User, Characteristic } = require('../db/models');

const localCheck = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    return res.json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const localSignin = async (req, res) => {
  const { email, password } = req.body;
  if ((email, password)) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user && (await bycrypt.compare(password, user.password))) {
        req.session.user = {
          nickname: user.nickname,
          id: user.id,
          email: user.email,
          steamID: user.steamID,
        };
        return res.json({
          nickname: user.nickname,
          id: user.id,
          email: user.email,
          steamID: user.steamID,
        });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const localSignup = async (req, res) => {
  const { nickname, email, password } = req.body;
  if (nickname && email && password) {
    try {
      const pass = await bycrypt.hash(password, 10);
      const newUser = await User.create({
        nickname,
        email,
        password: pass,
        roleId: 1,
        searchStatus: false,
        steamID: 0,
      });
      req.session.user = {
        id: newUser.id,
        nickname: newUser.nickname,
        email: newUser.email,
        steamID: newUser.steamID,
      };
      await Characteristic.create({
        userId: newUser.id,
        toUserId: newUser.id,
        toxic: 0,
        friendly: 0,
        teamPlayer: 0,
        leader: 0,
        strategy: 0,
      });
      return res.json({ nickname: newUser.nickname, id: newUser.id });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

module.exports = { localSignin, localSignup, localCheck };
