var mongoose = require ('mongoose');

var ReviewSchema = new mongoose.Schema ({
	iName : {
		type: String
	},
	seller : {
		type: String
	},
	reviewer : {
		type: String
	},
	review : {
		type: String
	},
	dpreviewer : {
		type: String
	}
});

module.exports = mongoose.model('Review', ReviewSchema);