const router = require('express').Router();
const { Mode } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allModes = await Mode.findAll();
  console.log(allModes);
  res.json(allModes);
});

module.exports = router;
