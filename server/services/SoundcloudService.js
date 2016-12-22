var local = require('../../local');
var _ = require('lodash');
var https = require('https');


module.exports = {

	getUserTracks: function(req, cb) {
		// TODO: remove if-case - only logged in user should be authorized for this
		if (req.user) {
			var soundCloudId = _.get(local, 'credentials.SOUNDCLOUD_CLIENT_ID');
			var url = req.user.SCUri + "/tracks?client_id=" + soundCloudId;
			
			https.get(url, function(res) {
				var body = '';

				// Accumulate data stream
				res.on('data', function(chunk) {
					body += chunk;
				});

				// Stream is finished, invoke callback with parsed data
				res.on('end', function() {
					cb(JSON.parse(body));
				});
			}).on('error', function(e) {
				console.error(e);
			})
		} else {
			cb([]);
		}
	}
};