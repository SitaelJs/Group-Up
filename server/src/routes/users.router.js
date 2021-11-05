const router = require('express').Router();
const { User, Characteristic } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  setTimeout(() => {
    res.json(allUsers);
  }, 1e3);
});

router.get('/one', async (req, res, next) => {
  const oneUser = await User.findOne({ where: { id: req.body.id } });
  res.json(oneUser);
});

router.get('/characterisitics', async (req, res) => {
  const character = await Characteristic.findAll();
  res.json(character);
});

router.post('/characterisitics/inc', async (req, res) => {
  const { id, value, charac, auth } = req.body;

  const character = await Characteristic.findOne({
    where: { userId: auth.id, toUserId: charac.toUserId },
  });
  if (!character) {
    await Characteristic.create({
      userId: id,
      toUserId: 0,
      toxic: 0,
      friendly: 0,
      teamPlayer: 0,
      leader: 0,
      strategy: 0,
    });
  } else {
    await character.increment(`${value}`, { by: 5 });
    await character.save();
    res.json(character);
  }
});

router.post('/characterisitics/dec', async (req, res) => {
  const { id, value, charac, auth } = req.body;

  const character = await Characteristic.findOne({
    where: { userId: auth.id, toUserId: charac.toUserId },
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

module.exports = router;
