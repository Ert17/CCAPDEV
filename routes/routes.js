
const express = require('express');

const controller = require('../controllers/controller.js')

const validation = require('../helpers/validation.js');

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

app.post('/login', controller.postLogIn);

app.post('/', validation.signupValidation(), upload.single('photo'), controller.postSignUp);

app.get('/logout', controller.getLogOut);

app.get('/getCheckusername', controller.getCheckusername);

app.get('/browse/:query', controller.getSearch);

app.get('/browse', controller.getBrowse);

app.get('/item/:iName', controller.getItem);

app.get('/user/:username', controller.getUser);

// exports the object `app` (defined above) when another script exports from this file
module.exports = app;