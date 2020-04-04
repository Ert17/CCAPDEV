var mongoose = require ('mongoose');

var ReviewSchema = new mongoose.Schema ({
	iName : {
		type: String,
		required: false
	},
	seller : {
		type: String,
		required: false
	},
	reviewType : {
		type: String,
		required: true
	},
	reviewer : {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('Review', ReviewSchema);