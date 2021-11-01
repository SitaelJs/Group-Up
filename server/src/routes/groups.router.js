const router = require('express').Router();
const { v4 } = require('uuid');
const { Group } = require('../db/models');

router.post('/', async (req, res, next) => {
  // const newGroup = req.body;
  const newGroup = await Group.create({
    name: v4(),
    gameId: req.body.gameId,
    modeId: req.body.modeId,
    positionId: req.body.positionId,
    userId: 2,
  });
  // console.log(newGroup);
  res.json(newGroup);
});

module.exports = router;
