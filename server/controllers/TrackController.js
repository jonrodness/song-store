var Track = require('../models/Track');
var User = require('../models/User');

var s3 = require('../config/awsS3');

var MAX_FILE_NAME = 30;

module.exports = {
	upload: function(req, res) {
		var user = req.user;
		var file = req.file;

		if (!file) {
			return res.status(400).json('Unable to upload track');
		} else if (file.originalname && file.originalname.length > MAX_FILE_NAME) {
			return res.status(400).json('Filename too long. Max length is 20 characters.');
		}
		// Save the track as a subdoc of User
		var length = user.tracks.push({ 
			title: file.originalname 
		});

		var track = user.tracks[length - 1];

		user.save(function(err, user) {
			if (err) {
				console.log('Error: ' + err);
				res.status(400).json('Unable to upload track');				
			} else {
				var params = {
					Bucket: 'songstore',
					Key: track._id.toString(),
					Body: req.file.buffer
				};

				s3.putObject(params, function(err) {
					if (err) {
						console.log('Error: ' + err);						
						res.status(400).json('Unable to upload track');
					} else {
						res.status(201).json('Successfully uploaded track ' + file.originalname);
					}
				});			
			}
		});
	},

	updateVisibility: function(req, res) {
		var user = req.user;		
		var track = user.tracks.id(req.params.trackId);
		if (track) {
			track.visible = !track.visible;
		}

		user.save(function(err, user) {
			if (err) {
				console.log('Error: ' + err);
				res.status(400).json('Unable to update track');				
			} else {
				res.status(200).send();
			}
		})
	},

	get: function(req, res) {
		var trackId = req.params.trackId;
		var params = {
			Bucket: 'songstore',
			Key: trackId
		};

		var readStream = s3.getObject(params);

		readStream.on('httpHeaders', function(statusCode, headers, response) {
			
			if (statusCode === 200) {
				res.set({
					'content-type': headers['content-type'],
					'content-length': headers['content-length'],
					'accept-ranges':  headers['accept-ranges']
				});

				response.httpResponse.createUnbufferedStream().pipe(res);
			} else {
				res.send('Error');
			}
		});

		readStream.send();	
	},

	delete: function(req, res) {
		var user = req.user;
		var track = user.tracks.id(req.params.trackId);
		if (track) {
			track.remove();
		}

		user.save(function(err, user) {
			if (err) {
				console.log('Error: ' + err);
				res.status(400).json('Unable to delete track');				
			} else {
				res.status(200).send();
			}
		})
	}
}