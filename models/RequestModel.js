var mongoose = require ('mongoose');

var RequestSchema = new mongoose.Schema ({
	iName : {
		type: String,
		required: true
	},
	seller : {
		type: String,
		required: true
	},
	access_date : {
		type: Date,
		required: true
	},
	cancel_date : {
		type: Date,
		required: false
	}
});

module.exports = mongoose.model('Request', RequestSchema);