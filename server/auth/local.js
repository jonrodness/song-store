var passport = require('passport');
var _ = require('lodash');
var LocalStrategy = require('passport-local');

var User = require('../models/User');
var config = require('../config/oauth');
var init = require('./init');

passport.use('local-login', new LocalStrategy(
  	function(username, password, done) {

		var searchQuery = {
			username: username
		}

	    User.findOne(searchQuery, function (err, user) {
	    	if (err) { 
	      		return done(err); 
	      	}
	      	if (!user) { 
	      		return done(null, false); 
	      	}
	      	user.verifyPassword(password, function(err, isMatch) {
	      		if (err) {
	      			return done(null, false);       		
	      		} else {
	      			return done(null, user);
	      		}
	    	});
 		});
	}
));

passport.use('local-signup', new LocalStrategy(
	function(username, password, done) {
			if (username.length > 20) {
				return done(null, false)				
			}

			var searchQuery = {
				username: username
			}		

			User.findOne(searchQuery, function(err, user) {
				if (err) {
					return done(err);
				}
				if (user) {
					// Username taken
					// TODO: set return message
					return done(null, false)
				} else {
					var newUser = new User();
					newUser.username = username;
					// Password will be hashed prior to save
					newUser.password = password;
					newUser.save(function(err) {
						if (err) {
							return done(null, false);
						}
						return done(null, newUser);
					});
				}
			});
		// });
	}
));

// serialize for session
init();

module.exports = passport;