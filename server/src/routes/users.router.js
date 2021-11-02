const router = require('express').Router();
const { User, Characteristic } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

router.get('/users/characterisitics', async (req, res) => {
  const character = await Characteristic.findAll();
  res.json(character);
  console.log('from server----->', character);
});

// router.get('/users/characterisitics/:userId', async (req, res) => {
//   const addCharacValue = await Characteristic.findOne({ where: { id: req.params.id } });
//   res.json(addCharacValue);
// });

module.exports = router;
