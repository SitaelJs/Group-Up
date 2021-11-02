const router = require('express').Router();
const bycrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/').get(async (req, res) => {
  res.json({});
});

const localSignin = async (req, res) => {
  const { email, password } = req.body;
  if ((email, password)) {
    const user = await User.findOne({ where: { email } });
    if (user && (await bycrypt.compare(password, user.password))) {
      req.session.user = { nickname: user.nickname, id: user.id };
      return res.json({ nickname: user.nickname, id: user.id });
    }
    return res.sendStatus(401);
  }
  return res.sendStatus(401);
};

const localSignup = async (req, res) => {
  const { nickname, email, password } = req.body;
  if (nickname && email && password) {
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
  }
  return res.sendStatus(401);
};

const localCheck = (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
};

const localLogout = (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
};

module.exports = { localSignin, localSignup, localCheck, localLogout };
