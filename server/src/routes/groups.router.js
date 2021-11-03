const router = require('express').Router();
const { v4 } = require('uuid');
const axios = require('axios');
const { Group, User, UserGroup } = require('../db/models');

// axios.defaults.withCredentials = true

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
  const { _search: search } = req.query;
  const allGroups = await Group.findAll();
  let result = allGroups;
  if (search) {
    const regExp = new RegExp(search, 'i');
    result = result.filter((group) => regExp.test(group.name));
  }

  res.json(result);
});
router.get('/:groupId', async (req, res, next) => {
  const { groupId } = req.params;
  const userForGroup = await User.findAll({
    include: [{ model: Group, as: 'Groups', where: { id: groupId } }],
  });
  res.json(userForGroup);
});
router.get('/change/:groupId', async (req, res, next) => {
  const { groupId } = req.params;
  const { email } = req.user;
  const currentUser = await User.findOne({ where: { email } });
  const curGroup = await UserGroup.findOne({ where: { userId: currentUser.id, groupId } });
  if (curGroup) {
    await UserGroup.destroy({ where: { userId: currentUser.id, groupId } });
  } else {
    await UserGroup.create({ groupId: req.params.groupId, userId: currentUser.id });
  }
  const userForGroup = await User.findAll({
    include: [{ model: Group, as: 'Groups', where: { id: groupId } }],
  });
  res.json(userForGroup);
});

router.delete('/delete/:groupId', async (req, res) => {
  const { email } = req.user;
  console.log(email);
  const currentUser = await User.findOne({ where: { email } });
  console.log(currentUser);
  await UserGroup.destroy({ where: { userId: currentUser.id } });
  await Group.destroy({ where: { userId: currentUser.id } });
});

module.exports = router;
