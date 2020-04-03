var mongoose = require ('mongoose');

var UserSchema = new mongoose.Schema ({
	fName : {
		type: String,
		required: true
	},
	lName : {
		type: String,
		required: true
	},
	username : {
		type: String,
		required: true
	},
	pw : {
		type: String,
		required: true
	},
	bio : {
		type: String,
		required: false
	},
	photo : {
		type: String
	}
});

module.exports = mongoose.model('User', UserSchema);