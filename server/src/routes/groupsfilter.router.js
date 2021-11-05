const router = require('express').Router();
const { Group } = require('../db/models');

router.get(`/`, async (req, res, next) => {

  try {
    const filteredGroupList = await Group.findAll({
      where: {
        gameId: +req.query.gameId,
        modeId: +req.query.modeId,
        positionId: +req.query.positionId,
      },
    });
    res.json(filteredGroupList);
  }catch (e) {
    console.log(e)
    res.sendStatus(500)
  }


});

module.exports = router;
