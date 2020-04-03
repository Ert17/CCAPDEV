
const express = require('express');

const controller = require('../controllers/controller.js')
const signupController = require('../controllers/signupController.js')

const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './public/img/')
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname)
	}
});

const upload = multer({storage: storage});

const app = express();

app.get('/', controller.getHome);

app.post('/', signupController.postSignUp);

app.get('/browse/:query', controller.getBrowse);

app.get('/item/:iName', controller.getItem);

app.get('/profile/:username', controller.getProfile);

// exports the object `app` (defined above) when another script exports from this file
module.exports = app;