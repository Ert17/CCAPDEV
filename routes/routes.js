// import module `express`
const express = require('express');

// import module routes from `../controllers/controller.js`
const controller = require('../controllers/controller.js')

const app = express();

// execute function getHome() as defined in object controller in `../controllers/controller.js`
// when a client sends an HTTP GET request for '/'
app.get('/', controller.getHome);

// execute function getBrowse() as defined in object controller in `../controllers/controller.js`
// when a client sends an HTTP GET request for `/browse'
app.get('/browse', controller.getBrowse);

// execute function getItem() as defined in object controller in `../controllers/controller.js`
// when a client sends an HTTP GET request for `/:username` where `username` is a parameter ~~ or ano ba dapat
app.get('/item', controller.getItem);

// execute function getProfile() as defined in object controller in `../controllers/controller.js`
// when a client sends an HTTP GET request for `/:username` where `username` is a parameter
app.get('/:username', controller.getProfile);


// exports the object `app` (defined above) when another script exports from this file
module.exports = app;