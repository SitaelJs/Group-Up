const authRouter = require('express').Router();
const {
  authGoogle,
  authGoogleCallback,
  authGoogleLogout,
  ifSuccess,
  ifFailed,
} = require('../controllers/authGoogle.controller');

const { initUser } = require('../middleware/checkAuth');

// Google
authRouter.get('/google', authGoogle);
authRouter.get('/google/callback', authGoogleCallback);
authRouter.get('/google/logout', authGoogleLogout);
authRouter.get('/google/success', initUser, ifSuccess);
authRouter.get('/google/failed', ifFailed);

module.exports = authRouter;
