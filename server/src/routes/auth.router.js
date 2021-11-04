const authRouter = require('express').Router();
const {
  authGoogle,
  authGoogleCallback,
  authGoogleLogout,
  ifSuccess,
  ifFailed,
  authGoogleResponse,
} = require('../controllers/authGoogle.controller');

const { localSignin, localSignup, localCheck } = require('../controllers/authLocal.controller');
const {
  getSteam,
  returnSteam,
  steamSuccess,
  authSteamResponse,
} = require('../controllers/authSteam.controller');

const { initUser } = require('../middleware/checkAuth');

// Google
authRouter.get('/google', authGoogle);
authRouter.get('/google/callback', authGoogleCallback);
authRouter.get('/google/logout', authGoogleLogout);
authRouter.get('/google/success', initUser, ifSuccess);
authRouter.get('/google/failed', ifFailed);
authRouter.get('/google/find', authGoogleResponse);

// Local
authRouter.post('/signin', localSignin);
authRouter.post('/signup', localSignup);
authRouter.get('/check', localCheck);

// Steam
authRouter.get('/steam', getSteam);
authRouter.get('/steam/return', returnSteam);
authRouter.get('/steam/success', steamSuccess);

module.exports = authRouter;
