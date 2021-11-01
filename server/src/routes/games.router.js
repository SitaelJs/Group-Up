const router = require('express').Router();
const { Game, Mode, Position } = require('../db/models');

router.get('/', async (req, res, next) => {
  const allGames = await Game.findAll();
  res.json(allGames);
});

router.get('/:gameId', async (req, res, next) => {
  const { gameId } = req.params;
  let gameModes = {};
  const modes = await Mode.findAll({
    include: [{ model: Game, as: 'Games', where: { id: gameId } }],
  });
  const positions = await Position.findAll({
    include: [{ model: Game, as: 'Games', where: { id: gameId } }],
  });

  gameModes = { modes, positions };
  res.json(gameModes);
});
module.exports = router;
