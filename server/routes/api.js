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
router.get('/artists/:artistId/tracks', soundcloudUserController.getArtistTracks);
router.get('/artists', soundcloudUserController.getArtistList);

router.get('/song', trackController.get);

router.post('/track', upload.single('track'), trackController.upload);

module.exports = router;