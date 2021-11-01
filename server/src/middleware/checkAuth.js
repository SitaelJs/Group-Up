require('dotenv').config();

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

    if (ourUser) {
      if (ourUser.roleId === 3 || ourUser.email === process.env.ADMIN) {
        if (ourUser.email === process.env.ADMIN && ourUser.roleId !== 3) {
          ourUser.roleId = 3;
          ourUser.save();
        }
        return next();
      }
    } else {
      await User.create({
        nickname: req.session?.passport?.user?.emails[0]?.value.replace(/@.*/, ''),
        email: req.session?.passport?.user?.emails[0]?.value,
        password: uuidv4(),
        roleId: 1,
        searchStatus: false,
        photo: req.session?.passport?.user?.photos[0]?.value,
      });
    }
  }

  return next();
};

module.exports = initUser;
