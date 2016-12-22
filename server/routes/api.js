var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* UserController */
router.get('/artists/:artistId', userController.getArtist);
router.get('/artists/:artistId/tracks', userController.getArtistTracks);
router.get('/artists', userController.getArtistList);

module.exports = router;