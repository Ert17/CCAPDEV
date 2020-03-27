// This script creates the database and inserts 5 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table) to perform CRUD (Create, Read, Update, Delete) operations
const collection = 'profiles';

// calls the function createDatabase() defined in the `database` object in `./models/db.js`
db.createDatabase();

// creates an object containing first name, last name, username, and bio of a user
var user = {
    fName: 'Gabriel',
    lName: 'Olan',
    pw: '1234',
    username: 'Oninolan',
    bio: 'Hi! My name is Olan and I love selling things!'
};

// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object containing first name, last name, username, and bio of a user
var user = {
    fName: 'Earth',
    lName: 'Lopez',
    pw: '4321',
    username: 'Lop3arth',
    bio: 'My name is Earth! Welcome to my store!'
};

// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object containing first name, last name, username, and bio of a user
var user = {
    fName: 'Manny',
    lName: 'Pacquiao',
    pw: '1234',
    username: 'MannyP',
    bio: 'The people\'s champ and Philippine senator',
};

// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object containing first name, last name, username, and bio of a user
var user = {
    fName: 'Greta',
    lName: 'Thunberg',
    pw: '4321',
    username: 'LordHandStark',
    bio: 'Environmentalist and dog lover'
};

// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);

// creates an object containing first name, last name, username, and bio of a user
var user = {
    fName: 'Taylor',
    lName: 'Swift',
    pw: '1234',
    username: 'Tswift',
    bio: 'Artist of the decade and mother of meredith'
};

// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the object `user` in the collection (table) `profiles`
db.insertOne(collection, user);
