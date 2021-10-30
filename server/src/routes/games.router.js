const router = require('express').Router();
const { Game } = require('../db/models');

router.route('/').get((req, res, next) => {
  const allGames = Game.findAll();
  res.json(allGames);
});

module.exports = router;
