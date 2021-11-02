const router = require('express').Router();
const {v4} = require('uuid');
const {Group} = require('../db/models');

router.post('/', async (req, res, next) => {
    const newGroup = await Group.create({
        name: v4(),
        gameId: req.body.gameId,
        modeId: req.body.modeId,
        positionId: req.body.positionId,
        userId: 1,
    });
    console.log(newGroup.dataValues);
    res.json(newGroup);
});

router.get('/', async (req, res, next) => {
    const allGroups = await Group.findAll();
    res.json(allGroups);
});

module.exports = router;
