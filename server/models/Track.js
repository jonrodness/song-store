/* mongodb */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: id should be app id - it is currently soundcloud id
// var trackSchema = new Schema({
// 	id: String,
// 	user_id: String,
// 	title: String,
// 	stream_url: String,
// 	hidden: {type: Boolean, default: true}
// });

var TrackSchema = new Schema({
	title: String,
	active: { type: String, default: true },
	dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Track', TrackSchema);