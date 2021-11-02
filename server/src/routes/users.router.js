const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

module.exports = router;
