var User = require('../models/User');
var Track = require('../models/Track');

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
					name: user.username
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
				var usersRes = users.map(function(user) {
					var id = user._id.toString();
					
					var visibleTracksLength = user.tracks.filter(function(track) {
						return track.visible === true;
					}).length;

					return {
						username: user.username,
						id: user.id,
						tracksLength: visibleTracksLength
					}
				});

				res.json(usersRes);
			}
		});
	},	

	getArtistTracks: function(req, res) {
		var userId = req.params.userId;
		// TODO: should search by app ID
		User.findOne({_id: userId}, function(err, user) {
			if(err) {
				res.status(400);
				res.send();	
			} else {
				var tracks = user.tracks.map(function(track) {
					var id = track._id.toString();
					return {
						title: track.title,
						id: id,
						url: '/api/track-stream/' + id,
						artistName: user.username,
						dateAdded: track.dateAdded.toDateString()
					}
				});

				res.json(tracks);
			}
		});
	}	
}
