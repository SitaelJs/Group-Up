// const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User } = require('../db/models');

const localCheck = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    return res.json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
};

// router.route('/').get(async (req, res) => {
//   res.json({});
// });

const localSignin = async (req, res) => {
  const { email, password } = req.body;
  if ((email, password)) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user && (await bycrypt.compare(password, user.password))) {
        req.session.user = { nickname: user.nickname, id: user.id };

        return res.json({ nickname: user.nickname, id: user.id });
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
      });
      req.session.user = { nickname: newUser.nickname, id: newUser.id };

      return res.json({ nickname: newUser.nickname, id: newUser.id });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

module.exports = { localSignin, localSignup, localCheck };
