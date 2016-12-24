/* mongodb */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var SoundcloudUserSchema = new Schema({
	SCId: String,			
	SCUsername: String,
	SCPermalink: String,
	SCPermalinkUrl: String,
	SCUri: String
});

module.exports = mongoose.model('SoundcloudUser', SoundcloudUserSchema);
