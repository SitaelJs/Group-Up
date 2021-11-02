const router = require('express').Router();
const { v4 } = require('uuid');
const { Group, User } = require('../db/models');

router.post('/', async (req, res, next) => {
  const newGroup = await Group.create({
    name: v4(),
    gameId: req.body.gameId,
    modeId: req.body.modeId,
    positionId: req.body.positionId,
    userId: 2,
  });
  res.json(newGroup);
});

router.get('/', async (req, res, next) => {
  const allGroups = await Group.findAll();
  res.json(allGroups);
});
router.get('/:groupId', async (req, res, next) => {
  const { groupId } = req.params;
  const userForGroup = await User.findAll({
    include: [{ model: Group, as: 'Groups', where: { id: groupId } }],
  });
  res.json(userForGroup);
});
router.post('/:groupId', async (req, res, next) => {
  // console.log(req.params);
  // console.log(req.body);
  const { groupId } = req.params;
  const { userId } = req.body.userId;
  const curUser = await userGroup.findOne({ where: { userId } });
  if (curUser.groupId === groupId) {
    await userGroup.update({ groupId: null }, { where: { userId } });
    res.sendStatus(200);
  } else {
    await userGroup.update({ groupId }, { where: { userId } });
    res.sendStatus(200);
  }
});

module.exports = router;
