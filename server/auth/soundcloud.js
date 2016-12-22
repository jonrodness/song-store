var passport = require('passport');
var SoundCloudStrategy = require('passport-soundcloud').Strategy;
var _ = require('lodash');

var User = require('../models/User');
var config = require('../config/oauth');
var init = require('./init');

passport.use(new SoundCloudStrategy(
	config.soundcloud,
	function(accessToken, refreshToken, profile, done) {
		var id = profile.id;
		var username = _.get(profile, '_json.username', null);
		var permalink = _.get(profile, '_json.permalink', null);
		var permalinkUrl = _.get(profile, '_json.permalink_url', null);
		var uri = _.get(profile, '_json.uri', null);

		// TODO: should search by ID
		var searchQuery = {
			SCPermalink: permalink
		};
		
		var updates = {
			SCId: id,			
			SCUsername: username,
			SCPermalink: permalink,
			SCPermalinkUrl: permalinkUrl,
			SCUri: uri
		};
		
		var options = {
			upsert: true
		};		

		// Update user data or create a new user if not found
		User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
			if(err) {
				return done(err);
			} else {
				return done(null, user);
			}
		});
	}
));

// serialize for session
init();

module.exports = passport;