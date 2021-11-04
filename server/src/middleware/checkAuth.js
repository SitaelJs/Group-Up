require('dotenv').config();
const bycrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { User } = require('../db/models');

const initUser = async (req, res, next) => {
  if (req.session?.passport?.user?.roleId === 3) {
    return next();
  }

  if (req.session?.passport?.user) {
    const email = req.session?.passport?.user?.emails[0]?.value;

    const ourUser = await User.findOne({
      where: { email },
    });
    req.session.user = {
      id: ourUser.id,
      nickname: ourUser.nickname,
      email: ourUser.email,
      steamID: ourUser.steamID,
    };

    if (ourUser) {
      if (ourUser.roleId === 3 || ourUser.email === process.env.ADMIN) {
        if (ourUser.email === process.env.ADMIN && ourUser.roleId !== 3) {
          ourUser.roleId = 3;
          ourUser.save();
        }
        return next();
      }
    } else {
      const pass = await bycrypt.hash(uuidv4(), 10);
      const newUser = await User.create({
        nickname: req.session?.passport?.user?.emails[0]?.value.replace(/@.*/, ''),
        email: req.session?.passport?.user?.emails[0]?.value,
        password: pass,
        roleId: 1,
        searchStatus: false,
        photo: req.session?.passport?.user?.photos[0]?.value,
        steamID: 0,
      });
      req.session.user = {
        id: newUser.id,
        nickname: newUser.nickname,
        email: newUser.email,
        steamID: newUser.steamID,
      };
    }
  }

  return next();
};

const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  return next();
};

module.exports = { initUser, checkAuth };
