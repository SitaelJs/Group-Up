const router = require('express').Router();
const { Group } = require('../src/db/models');

router.get('/', async (req, res) => {
  const group = await Group.findAll({ order: [['createdAt', 'DESC']] });
  res.json(group);
});

module.exports = router;
