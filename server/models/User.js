/* mongodb */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	SCId: String,			
	SCUsername: String,
	SCPermalink: String,
	SCPermalinkUrl: String,
	SCUri: String
});

module.exports = mongoose.model('User', userSchema);
