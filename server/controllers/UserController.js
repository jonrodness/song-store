
var User = require('../models/User');
var Track = require('../models/Track');
var AWS = require('../config/aws');

module.exports = {
	getArtist: function(req, res) {
		var userId = req.params.artistId;
		// TODO: should search by app ID
		User.findOne({_id: userId}, function(err, user) {
			if(err) {
				res.status(400);
				res.send();
			} else {
				// TODO: !!! don't send all user data!
				res.json({
					id: user._id,
					name: user.SCUsername,
					link: user.SCPermalinkUrl
				});
			}
		});
	},

	getArtistList: function(req, res) {
		// TODO: !!! don't send all user data!
		User.find({}, function(err, users) {
			if(err) {
				res.status(400);
				res.send();
			} else {
				res.json(users);
			}
		});
	},

	getArtistTracks: function(req, res) {
		var artistId = req.params.artistId;
		// TODO: should search by app ID
		Track.find({user_id: artistId}, function(err, tracks) {
			if(err) {
				res.status(400);
				res.send();	
			} else {
				res.json(tracks);
			}
		});
	},

	getSong: function(req, res) {
		var client = AWS.getClient();		
		
		var s3Params = {
			Bucket: 'songstore',
			Key: 'Trainslide.mp3'
		}

		var downloadStream = client.downloadFile(s3Params);
		
		downloadStream.on('error', function(err) {
			console.log('Download failed: ' + err.stack);
		});

		downloadStream.on('httpHeaders', function(status, headers, resp) {
			res.set({
				'Content-Type': headers['content-type']
			});
		});

		downloadStream.pipe(res);
	}

}