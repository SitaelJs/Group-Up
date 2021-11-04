const userRouter = require('express').Router();
const { User, Characteristic } = require('../db/models');

userRouter.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  setTimeout(() => {
    res.json(allUsers);
  }, 1e3);
});

<<<<<<< HEAD
userRouter.get('/one', async (req, res, next) => {
  const oneUser = await User.findOne({ where: { id: req.body.id } });
  res.json(oneUser);
});

userRouter.get('/characterisitics', async (req, res) => {
=======
router.get('/characterisitics', async (req, res) => {
>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
  const character = await Characteristic.findAll();
  res.json(character);
});

<<<<<<< HEAD
userRouter.post('/characterisitics/inc', async (req, res) => {
  const { id, value, charac } = req.body;
=======
router.post('/characterisitics/inc', async (req, res) => {
  const { id, value, charac, auth } = req.body;

>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
  const character = await Characteristic.findOne({
    where: { userId: auth.id, toUserId: charac.toUserId },
  });
<<<<<<< HEAD
  if (!character) {
=======

  if (!character) {
    console.log('in if');

>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
    await Characteristic.create({
      userId: id,
      toUserId: 0,
      toxic: 0,
      friendly: 0,
      teamPlayer: 0,
      leader: 0,
      strategy: 0,
    });
<<<<<<< HEAD
=======
    res.json(character);
    // } else if (character.userId === auth.id) {
    //   res.sendStatus(304);
>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
  } else {
    await character.increment(`${value}`, { by: 5 });
    await character.save();
    res.json(character);
  }
});

<<<<<<< HEAD
userRouter.post('/characterisitics/dec', async (req, res) => {
  const { id, value, charac } = req.body;
=======
router.post('/characterisitics/dec', async (req, res) => {
  const { id, value, charac, auth } = req.body;

>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
  const character = await Characteristic.findOne({
    where: { userId: auth.id, toUserId: charac.toUserId },
  });
<<<<<<< HEAD
=======

>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
  if (!character) {
    await Characteristic.create({
      userId: charac.id,
      toUserId: charac.toUserId,
      toxic: charac.toxic,
      friendly: charac.friendly,
      teamPlayer: charac.teamPlayer,
      leader: charac.leader,
      strategy: charac.strategy,
    });
  } else {
    await character.decrement(`${value}`, { by: 5 });
    await character.save();
  }
  res.json(character);
});

<<<<<<< HEAD
module.exports = userRouter;
=======
module.exports = router;
>>>>>>> 75b87a89a58abd4c21295f4fb67a9c8c83fcbae8
