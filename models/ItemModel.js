var mongoose = require ('mongoose');

var ItemSchema = new mongoose.Schema ({
	iName : {
		type: String,
		required: true
	},
	seller : {
		type: String,
		required: true
	},
	price : {
		type: Number,
		required: true
	},
	quantity : {
		type: Number,
		required: true
	},
	bio : {
		type: String,
		required: true
	},
	MOD : {
		type: String,
		required: true
	},
	meet_location : {
		type: String,
		required: true
	},
	contact : {
		type: Number,
		required: true
	},
	photo : {
		type: String
	}
});

module.exports = mongoose.model('Item', ItemSchema);