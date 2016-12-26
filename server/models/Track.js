/* mongodb */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrackSchema = new Schema({
	title: String,
	deleted: { type: Boolean, default: false },
	visible: { type: Boolean, default: true },
	dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Track', TrackSchema);