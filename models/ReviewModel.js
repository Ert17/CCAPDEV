var mongoose = require ('mongoose');

var ReviewSchema = new mongoose.Schema ({
	iName : {
		type: String
	},
	seller : {
		type: String
	},
	reviewer : {
		type: String,
		required: true
	},
	review : {
		type: String,
		required: true
	},
	dpreviewer : {
		type: String
	}
});

module.exports = mongoose.model('Review', ReviewSchema);