const userRouter = require('express').Router();
const { User, Characteristic } = require('../db/models');

userRouter.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

userRouter.get('/users/characterisitics', async (req, res) => {
  const character = await Characteristic.findAll();
  res.json(character);
});

userRouter.post('/users/characterisitics/inc', async (req, res) => {
  const { id, value, charac } = req.body;
  const character = await Characteristic.findOne({
    where: { userId: id, toUserId: charac.toUserId },
  });
  if (!character) {
    await Characteristic.create({
      userId: id,
      toUserId: charac.toUserId,
      toxic: charac.toxic,
      friendly: charac.friendly,
      teamPlayer: charac.teamPlayer,
      leader: charac.leader,
      strategy: charac.strategy,
    });
  } else {
    await character.increment(`${value}`, { by: 5 });
    await character.save();
  }
  res.json(character);
});

userRouter.post('/users/characterisitics/dec', async (req, res) => {
  const { id, value, charac } = req.body;
  const character = await Characteristic.findOne({
    where: { userId: id, toUserId: charac.toUserId },
  });
  if (!character) {
    await Characteristic.create({
      userId: charac.id,
      toUserId: charac.toUserId,
      toxic: charac.toxic,
      friendly: charac.friendly,
      teamPlayer: charac.teamPlayer,
      leader: charac.leader,
      strategy: charac.strategy,
    });
  } else {
    await character.decrement(`${value}`, { by: 5 });
    await character.save();
  }
  res.json(character);
});

module.exports = userRouter;
