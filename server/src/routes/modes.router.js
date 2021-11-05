const router = require('express').Router();
const { Mode } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allModes = await Mode.findAll();
    res.json(allModes);
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
});

module.exports = router;
