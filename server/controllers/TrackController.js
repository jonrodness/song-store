var Track = require('../models/Track');
var User = require('../models/User');

var s3 = require('../config/awsS3');

module.exports = {
	upload: function(req, res) {
		var user = req.user;
		var file = req.file;

		// TODO: HANDLE no file

		// Save the track as a subdoc of User
		var length = user.tracks.push({ 
			title: file.originalname 
		});

		var track = user.tracks[length - 1];

		user.save(function(err, user) {
			if (err) {
				console.log('Error: ' + err);
				res.status(400).send();				
			} else {
				var params = {
					Bucket: 'songstore',
					Key: track._id.toString(),
					Body: req.file.buffer
				};

				s3.putObject(params, function(err) {
					if (err) {
						console.log('Error: ' + err);						
						res.status(400).send();
					} else {
						res.status(201).send('Successfully uploaded track');
					}
				});			
			}
		});
	},

	get: function(req, res) {
		var trackId = req.params.trackId;
		var params = {
				Bucket: 'songstore',
				Key: trackId
		};

		s3.getObject(params).createReadStream().pipe(res);	


		// need end or headers to tell when done








		// var downloadStream = client.downloadStream(s3Params);
		
		// downloadStream.on('error', function(err) {
		// 	console.log('Download failed: ' + err.stack);
		// });

		// downloadStream.on('httpHeaders', function(status, headers, resp) {
		// 	res.set({
		// 		'Content-Type': headers['content-type']
		// 	});
		// });

		// downloadStream.pipe(res);
	}
}