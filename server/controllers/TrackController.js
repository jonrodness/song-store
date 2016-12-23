var Track = require('../models/Track');
var s3 = require('../config/awsS3');

module.exports = {
	upload: function(req, res) {
		var file = req.file;
		
		var params = {
				Bucket: 'songstore',
				Key: file.originalname,
				Body: req.file.buffer
		};

		s3.putObject(params, function(err) {
			if (err) {
				res.status(400).send('Error: ' + err);
			} else {
				res.status(201).send('Successfully uploaded track');
			}
		})

		// var uploader = client.uploadFile(s3Params);
		
		console.log(">>>>>>>>>>>POST");
	},

	get: function(req, res) {
		var params = {
				Bucket: 'songstore',
				Key: 'Trainslide.mp3'
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