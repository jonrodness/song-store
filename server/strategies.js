var local = require('../../local');

var strategies = {
	soundcloud: {
	 	clientID: local.credentials.SOUNDCLOUD_CLIENT_ID,
	    clientSecret: local.credentials.SOUNDCLOUD_CLIENT_SECRET,
	    callbackURL: 'http://localhost:1337/auth/soundcloud/callback?next=/player'		
	}
};

module.exports = strategies;