
const mongoose = require ('mongoose');

const url = "mongodb://localhost:27017/CCAPDEV";

const User = require('./UserModel.js');
const Item = require('./ItemModel.js');
const Request = require('./RequestModel.js');
const Review = require('./ReviewModel.js');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

// defines an object which contains necessary database functions
const database = {

	connect: function () {
        mongoose.connect(url, options, function(error) {
            if(error) throw error;
            console.log('Connected to: ' + url);
        });
    },

	insertOne: function(model, doc) {
        model.create(doc, function(error, result) {
            if(error) throw error;
            console.log('Added ' + result);
        });
    },

    insertMany: function(model, docs) {
        model.insertMany(docs, function(error, result) {
            if(error) throw error;
            console.log('Added ' + result);
        });
    },

	findOne: function(model, query, projection, callback) {
        model.findOne(query, projection, function(error, result) {
            if(error) throw error;
            return callback(result);
        });
    },

    findMany: function(model, query, projection, callback) {
        model.find(query, projection, function(error, result) {
            if(error) throw error;
            return callback(result);
        });
    },

    updateOne: function(model, filter, update) {
        model.updateOne(filter, update, function(error, result) {
            if(error) throw error;
            console.log('Document modified: ' + result.nModified);
        });
    },

    updateMany: function(model, filter, update) {
        model.updateMany(filter, update, function(error, result) {
            if(error) throw error;
            console.log('Documents modified: ' + result.nModified);
        });
    },

    deleteOne: function(model, conditions) {
        model.deleteOne(conditions, function (error, result) {
            if(error) throw error;
            console.log('Document deleted: ' + result.deletedCount);
        });
    },

    deleteMany: function(model, conditions) {
        model.deleteMany(conditions, function (error, result) {
            if(error) throw error;
            console.log('Document deleted: ' + result.deletedCount);
        });
    }
}

module.exports = database;
