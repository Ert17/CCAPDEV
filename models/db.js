
// import module mongodb
const mongodb = require ('monogdb');

// MONGODB Client
const client = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

// name of the database
const dbName = 'database';

// additional connection options
const options = { useUnifiedTopology: true};

// defines an object which contains necessary database functions
const database = {

	// creates a database
	function createDatabase () {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			console.log('Database created.')
			db.close();
		});
	}

	// creates a collection in the database
	function createCollection (collection) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.createCollection(collection, function(err, res) {
				if (err) throw err;
				console.log('Collection ' + collection + ' created.');
				db.close();
			});
		});
	}

	// inserts one document in a given collection
	function insertOne (collection, doc) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).insertOne(doc, function(err, res) {
				if (err) throw err;
				console.log('1 document inserted.');
				db.close();
			});
		});
	}

	// inserts multiple documents (array of doc) in a given collection
	function insertMany (collection, docs) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).insertMany(docs, function(err, res) {
				if (err) throw err;
				console.log('Documents inserted: ' + res.insertedCount);
				db.close();
			});
		});
	}

	// finds a document in a given collection based on query
	// performs callback function after find function
	function findOne (collection, query, callback) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).findOne(query, function(err, result) {
				if (err) throw err;
				res = result;
				db.close();
				return callback(result);
			});
		});
	}

	// finds an array of document in a given collection based on query
	// performs callback function after find function
	findMany: function(collection, query, sort = null, projection = null, callback) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).find(query, {projection: projection})
            .sort(sort).toArray(function (err, result) {
                if(err) throw err;
                db.close();
                return callback(result);
            });
        });
    },

    // deletes a document from a given collection based on filter
	function deleteOne (collection, filter) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).deleteOne(filter, function(err, res) {
				if (err) throw err;
				console.log ('1 document deleted.');
				db.close();
			});
		});
	}

	// deletes an array of documents from a given collection based on filter
	function deleteMany (collection, filter) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).deleteOne(filter, function(err, res) {
				if (err) throw err;
				console.log ('Documents deleted: ' + res.deletedCount);
				db.close();
			});
		});
	}

	// drops a collection
	function dropCollection (collection) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).drop(function(err, res) {
				if (err) throw err;
				console.log ('Collection ' + collection + " deleted.");
				db.close();
			});
		});
	}

	// updates a value of an object of a document in the given collection
	function updateOne (collection, filter, update) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).updateOne(filter, update, 
			function(err, res) {
				if (err) throw err;
				console.log ('1 document updated.');
				db.close();
			});
		});
	}

	// updates a value of an object of multiple documents in the given collection
	function updateMany (collection, filter, update) {
		client.connect(url, options, function(err, db) {
			if (err) throw err;
			var database = db.db(dbName);
			database.collection(collection).updateMany(filter, update, 
			function(err, res) {
				if (err) throw err;
				console.log ('Document updated: ' + res.modifiedCount);
				db.close();
			});
		});
	}
}

// exports the object `database` (defined above) when another script exports from this file
module.exports = database;
