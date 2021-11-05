const router = require('express').Router();
const { Group } = require('../db/models');

router.get(`/`, async (req, res, next) => {
  console.log(req.query);
  // const {gameId, modeId, positionId } =
  const filteredGroupList = await Group.findAll({
    where: {
      gameId: +req.query.gameId,
      modeId: +req.query.modeId,
      positionId: +req.query.positionId,
    },
  });
  res.json(filteredGroupList);
});

module.exports = router;
