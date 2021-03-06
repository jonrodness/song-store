var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({});
var passport = require('passport');

var soundcloudUserController = require('../controllers/SoundcloudUserController');
var userController = require('../controllers/UserController');
var trackController = require('../controllers/TrackController');

/* UserController */
router.get('/artists/:artistId', userController.getArtist);
router.get('/artists/:userId/tracks', userController.getArtistTracks);
router.get('/artists', userController.getArtistList);

/* TrackController */
router.get('/track-stream/:trackId', trackController.get);
router.post('/track', upload.single('track'), trackController.upload);
router.delete('/tracks/:trackId', trackController.delete);
router.get('/tracks/update-visibility/:trackId', trackController.updateVisibility);

module.exports = router;