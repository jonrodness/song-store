var express = require('express');
var router = express.Router();
var passportSoundcloud = require('../auth/soundcloud');
var passportLocal = require('../auth/local');
var authController = require('../controllers/AuthController');

/*
 * Authenticate using Soundcloud oauth
 */
router.get('/soundcloud', passportSoundcloud.authenticate('soundcloud'));

/*
 * Authenticate using local oauth
 */
router.post('/local-login',
  passportLocal.authenticate('local-login', { failureRedirect: '/login' }),
  authController.loginSuccess
);

/*
 * Signup using local oauth
 */
router.post('/local-signup',
  passportLocal.authenticate('local-signup', { failureRedirect: '/login' }),
	authController.loginSuccess
	);


/*
 * Callback route after authenticated by Soundcloud oauth
 */
router.get('/soundcloud/callback',
	passportSoundcloud.authenticate('soundcloud', { failureRedirect: '/login' }),
	authController.loginSuccess
);

module.exports = router;