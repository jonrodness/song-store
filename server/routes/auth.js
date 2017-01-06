var express = require('express');
var router = express.Router();
var passportLocal = require('../auth/local');
var authController = require('../controllers/AuthController');

/*
 * Authenticate using local oauth
 */
router.post('/local-login',
	passportLocal.authenticate('local-login', { failureRedirect: '/authfail' }),
	authController.authSuccess
);

/*
 * Signup using local oauth
 */
router.post('/local-signup',
 	passportLocal.authenticate('local-signup', { failureRedirect: '/authfail' }),
	authController.authSuccess
);

module.exports = router;