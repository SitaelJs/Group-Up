const router = require('express').Router();
const { User, Characteristic } = require('../db/models');

router.get('/', async (req, res, next) => {

  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
});

router.get('/one', async (req, res, next) => {

  try{
    const oneUser = await User.findOne({ where: { id: req.body.id } });
    res.json(oneUser);
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }


});

router.get('/characterisitics', async (req, res) => {
  try {
    const character = await Characteristic.findAll();
    res.json(character);
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
});

router.post('/characterisitics/inc', async (req, res) => {

  try {
    const { id, value, auth } = req.body;
    const character = await Characteristic.findOne({
      where: { userId: auth.id, toUserId: Number(id) },
    });
    if (!character) {
      const newCharact = await Characteristic.create({
        userId: auth.id,
        toUserId: Number(id),
        toxic: 0,
        friendly: 0,
        teamPlayer: 0,
        leader: 0,
        strategy: 0,
      });

      newCharact.increment(`${value}`, { by: 5 });
      res.json(character);
    } else if (character[value] === 0) {
      const plus = await character.increment(`${value}`, { by: 5 });
      res.json(plus);
    } else {
      res.json(character);
    }
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }


});

router.post('/characterisitics/dec', async (req, res) => {
  try{
    const { id, value, auth } = req.body;
    const character = await Characteristic.findOne({
      where: { userId: auth.id, toUserId: Number(id) },
    });
    if (!character) {
      const newCharact = await Characteristic.create({
        userId: auth.id,
        toUserId: Number(id),
        toxic: 0,
        friendly: 0,
        teamPlayer: 0,
        leader: 0,
        strategy: 0,
      });

      newCharact.decrement(`${value}`, { by: 5 });
      res.json(character);
    } else if (character[value] !== 0) {
      const minus = await character.decrement(`${value}`, { by: 5 });
      res.json(minus);
    } else {
      res.json(character);
    }
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }

});

module.exports = router;
