const mongodb = require ('monogdb');

const client = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

const options = { useUnifiedTopology: true};

function createDatabase () {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		console.log('Database created.')
		db.close();
	});
}

function createCollection (collection) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.createCollection(collection, function(err, res) {
			if (err) throw err;
			console.log('Collection ' + collection + ' created.');
			db.close();
		});
	});
}

function insertOne (collection, doc) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).insertOne(doc, function(err, res) {
			if (err) throw err;
			console.log('1 document inserted.');
			db.close();
		});
	});
}

function insertMany (collection, docs) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).insertMany(docs, function(err, res) {
			if (err) throw err;
			console.log('Documents inserted: ' + res.insertedCount);
			db.close();
		});
	});
}

function findOne (collection, query, callback) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).findOne(query, function(err, result) {
			if (err) throw err;
			res = result;
			db.close();
			return callback(result);
		});
	});
}

function findMany (collection, query) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).find(query)
		.toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
		});
	});
}

function findMany (collection, query, projection = null) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).find(query, {projection: projection})
		.toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
		});
	});
}

function findMany (collection, query, sort = null, projection = null) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).find(query, {projection: projection})
		sort(sort).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
		});
	});
}

function deleteOne (collection, filter) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).deleteOne(filter, function(err, res) {
			if (err) throw err;
			console.log ('1 document deleted.');
			db.close();
		});
	});
}

function deleteMany (collection, filter) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).deleteOne(filter, function(err, res) {
			if (err) throw err;
			console.log ('Documents deleted: ' + res.deletedCount);
			db.close();
		});
	});
}

function dropCollection (collection) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).drop(function(err, res) {
			if (err) throw err;
			console.log ('Collection ' + collection + " deleted.");
			db.close();
		});
	});
}

function updateOne (collection, filter, update) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).updateOne(filter, update, 
		function(err, res) {
			if (err) throw err;
			console.log ('1 document updated.');
			db.close();
		});
	});
}

function updateMany (collection, filter, update) {
	client.connect(url, options, function(err, db) {
		if (err) throw err;
		var database = db.db('database');
		database.collection(collection).updateMany(filter, update, 
		function(err, res) {
			if (err) throw err;
			console.log ('Document updated: ' + res.modifiedCount);
			db.close();
		});
	});
}
