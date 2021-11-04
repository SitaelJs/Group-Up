/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const router = require('express').Router();
const { User, Characteristic } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  setTimeout(() => {
    res.json(allUsers);
  }, 2e3);
});

router.get('/users/characterisitics', async (req, res) => {
  const character = await Characteristic.findAll();
  res.json(character);
  // console.log('from server----->', character);
});

router.post('/users/characterisitics/inc', async (req, res) => {
  // const { userId, toUserId, value, nameValue } = req.body;
  // console.log('------> from back ', req.body);
  const { id, value, charac } = req.body;
  // console.log('---sdsdsd->', id, value, charac.id);
  const character = await Characteristic.findOne({
    where: { userId: id, toUserId: charac.toUserId },
  });
  console.log('------>12345', character);
  // console.log(character);
  if (!character) {
    console.log('in if');
    // const allToUser = await Characteristic.findAll({ where: { toUserId: charac.id } });
    // const kajsfg = {
    //   toxic: 0,
    //   friendly: 0,
    //   teamPlayer: 0,
    //   leader: 0,
    //   strategy: 0,
    // };
    // for (let i = 0; i < allToUser.length; i++) {
    //   kajsfg.toxic += allToUser[i].toxic;
    //   kajsfg.friendly += allToUser[i].friendly;
    //   kajsfg.teamPlayer += allToUser[i].teamPlayer;
    //   kajsfg.leader += allToUser[i].leader;
    //   kajsfg.strategy += allToUser[i].strategy;
    // }

    // console.log('---->', kajsfg);
    await Characteristic.create({
      userId: id,
      toUserId: charac.toUserId,
      toxic: charac.toxic,
      friendly: charac.friendly,
      teamPlayer: charac.teamPlayer,
      leader: charac.leader,
      strategy: charac.strategy,
    });
    // console.log('----->233', character);
  } else {
    await character.increment(`${value}`, { by: 5 });
    await character.save();
  }
  res.json(character);
});

router.post('/users/characterisitics/dec', async (req, res) => {
  // const { userId, toUserId, value, nameValue } = req.body;
  // console.log('------> from back ', req.body);
  const { id, value, charac } = req.body;
  // console.log('---sdsdsd->', id, value, charac.id);
  const character = await Characteristic.findOne({
    where: { userId: id, toUserId: charac.toUserId },
  });
  // console.log(character);
  if (!character) {
    console.log('in if');
    // const allToUser = await Characteristic.findAll({ where: { toUserId: charac.id } });
    // const kajsfg = {
    //   toxic: 0,
    //   friendly: 0,
    //   teamPlayer: 0,
    //   leader: 0,
    //   strategy: 0,
    // };
    // for (let i = 0; i < allToUser.length; i++) {
    //   kajsfg.toxic += allToUser[i].toxic;
    //   kajsfg.friendly += allToUser[i].friendly;
    //   kajsfg.teamPlayer += allToUser[i].teamPlayer;
    //   kajsfg.leader += allToUser[i].leader;
    //   kajsfg.strategy += allToUser[i].strategy;
    // }

    // console.log('---->', kajsfg);
    await Characteristic.create({
      userId: charac.id,
      toUserId: charac.toUserId,
      toxic: charac.toxic,
      friendly: charac.friendly,
      teamPlayer: charac.teamPlayer,
      leader: charac.leader,
      strategy: charac.strategy,
    });
    // console.log('----->233', character);
  } else {
    await character.decrement(`${value}`, { by: 5 });
    await character.save();
  }
  res.json(character);
});

// router.get('/users/characterisitics/:userId', async (req, res) => {
//   const addCharacValue = await Characteristic.findOne({ where: { id: req.params.id } });
//   res.json(addCharacValue);
// });

module.exports = router;
