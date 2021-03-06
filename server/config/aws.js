var local = require('../../local');
var s3 = require('s3');

var aws = {
	init: function() {
		this.client = s3.createClient({
		  maxAsyncS3: 20, 
		  s3RetryCount: 3, 
		  s3RetryDelay: 1000, 
		  multipartUploadThreshold: 20971520, // 20 MB 
		  multipartUploadSize: 15728640, // 15 MB
		  s3Options: {
		    accessKeyId: local.credentials.AWS_ACCESS_KEY_ID,
		    secretAccessKey: local.credentials.AWS_SECRET_ACCESS_KEY,
		  },
		});		
	},

	getClient: function() {
		return this.client;
	}
}

module.exports = aws;