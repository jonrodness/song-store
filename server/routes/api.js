var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');
var trackController = require('../controllers/TrackController');
var multer = require('multer');
var upload = multer({});


/* UserController */
router.get('/artists/:artistId', userController.getArtist);
router.get('/artists/:artistId/tracks', userController.getArtistTracks);
router.get('/artists', userController.getArtistList);
router.get('/song', trackController.get);

router.post('/track', upload.single('track'), trackController.upload);

module.exports = router;