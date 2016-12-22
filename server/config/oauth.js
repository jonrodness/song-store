var local = require('../../local');

var config = {
	soundcloud: {
	 	clientID: local.credentials.SOUNDCLOUD_CLIENT_ID,
	    clientSecret: local.credentials.SOUNDCLOUD_CLIENT_SECRET,
	    callbackURL: 'http://localhost:3000/auth/soundcloud/callback'		
	}
};

module.exports = config;