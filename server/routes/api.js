var express = require('express');
var router = express.Router();
var soundcloudUserController = require('../controllers/SoundcloudUserController');
var trackController = require('../controllers/TrackController');
var multer = require('multer');
var upload = multer({});
var passport = require('passport');

/* UserController */
router.get('/artists/:artistId', soundcloudUserController.getArtist);
router.get('/artists/:artistId/tracks', soundcloudUserController.getArtistTracks);
router.get('/artists', soundcloudUserController.getArtistList);

router.get('/song', trackController.get);

router.post('/track', upload.single('track'), trackController.upload);

module.exports = router;