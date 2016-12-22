var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
	res.send('Go back and register!');
});

router.get('/logout', function(req, res, next) {
	req.logout();
	// TODO: check if session still exists before sending response
	res.status(200);
	res.send();
});

module.exports = router;