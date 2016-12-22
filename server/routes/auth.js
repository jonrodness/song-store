var express = require('express');
var router = express.Router();
var passportSoundcloud = require('../auth/soundcloud');
var authController = require('../controllers/AuthController');

/*
 * Authenticate using Soundcloud oauth
 */
router.get('/soundcloud', passportSoundcloud.authenticate('soundcloud'));

/*
 * Callback route after authenticated by Soundcloud oauth
 */
router.get('/soundcloud/callback',
	passportSoundcloud.authenticate('soundcloud', { failureRedirect: '/login' }),
	authController.loginSuccess
);

module.exports = router;