/* mongodb */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: id should be app id - it is currently soundcloud id
var trackSchema = new Schema({
	id: String,
	user_id: String,
	title: String,
	stream_url: String,
	hidden: {type: Boolean, default: true}
});

module.exports = mongoose.model('Track', trackSchema);