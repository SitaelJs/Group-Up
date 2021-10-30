const accountRouter = require('express').Router();
const { indexRender } = require('../controllers/index.controller');

accountRouter.get('/account', indexRender);

module.exports = accountRouter;
