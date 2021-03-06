const router = require('express').Router();
const { v4 } = require('uuid');
const { Group, User, UserGroup } = require('../db/models');

// axios.defaults.withCredentials = true

router.post('/', async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.user.email } });
  const newGroup = await Group.create({
    name: v4(),
    gameId: req.body.gameId,
    modeId: req.body.modeId,
    positionId: req.body.positionId,
    userId: user.id,
  });
  await UserGroup.create({
    userId: user.id,
    groupId: newGroup.id,
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
  const allUsersInGroup = await User.findAll({
    include: [{ model: Group, as: 'Groups', where: { id: groupId } }],
  });
  res.json(allUsersInGroup);
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
  const id = req.params;
  console.log(id);
  const currentUser = await User.findOne({ where: { email } });
  await UserGroup.destroy({ where: { userId: currentUser.id, groupId: id.groupId } });
  await Group.destroy({ where: { id: id.groupId, userId: currentUser.id } });
});

module.exports = router;
