var express = require('express');
var router = express.Router();

router.get('/authfail', function(req, res, next) {
	res.send('Something went wrong. Please try again.');
});

router.get('/logout', function(req, res, next) {
	req.logout();
	// TODO: check if session still exists before sending response
	res.status(200);
	res.send();
});

module.exports = router;