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
					name: user.SCUsername,
					link: user.SCPermalinkUrl
				});
			}
		});
	}
}
