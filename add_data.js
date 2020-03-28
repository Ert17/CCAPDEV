// This script creates the database and inserts 5 user details in the collection `profiles`

// import module from `./models/db.js`
const db = require('./models/db.js');

// name of the collection (table) to perform CRUD (Create, Read, Update, Delete) operations
var collection;

// calls the function createDatabase() defined in the `database` object in `./models/db.js`
db.createDatabase();

// PROFILES COLLECTION
collection = 'profiles';
var users = [
    {
        fName: 'Gabriel',
        lName: 'Olan',
        pw: '1234',
        username: 'Oninolan',
        bio: 'Hi! My name is Olan and I love selling things!'
    },
    {
        fName: 'Earth',
        lName: 'Lopez',
        pw: '4321',
        username: 'Lop3arth',
        bio: 'My name is Earth! Welcome to my store!'
    },
    {
        fName: 'Manny',
        lName: 'Pacquiao',
        pw: '1234',
        username: 'MannyP',
        bio: 'The people\'s champ and Philippine senator',
    },
    {
        fName: 'Greta',
        lName: 'Thunberg',
        pw: '4321',
        username: 'LordHandStark',
        bio: 'Environmentalist and dog lover'
    },
    {
        fName: 'Taylor',
        lName: 'Swift',
        pw: '1234',
        username: 'Tswift',
        bio: 'Artist of the decade and mother of meredith'
    }
];
// calls the function insertOne() defined in the `database` object in `./models/db.js`
// stores the objects in `user` in the collection (table) `profiles`
db.insertMany(collection, users);


// ITEMS COLLECTION
collection = 'items';
var items = [
    {
        iName: 'Dual Shock 4',
        seller: 'Oninolan',
        price: '₱ 3,000',
        quantity: '4',
        bio: 'Bought too much controller.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Ferrari',
        seller: 'Oninolan',
        price: '₱ 50,000,000',
        quantity: '1',
        bio: 'Selling this brand new Ferrari.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Stainless Pot',
        seller: 'Oninolan',
        price: '₱ 1,000',
        quantity: '1',
        bio: 'Selling this old stainless pot. Condition is good as new. Small crack on the handle.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Stove',
        seller: 'Oninolan',
        price: '₱ 2,000',
        quantity: '1',
        bio: 'This stove was bought 5 years ago. Selling this because it\'s not being used anymore.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Nintendo Switch',
        seller: 'Oninolan',
        price: '₱ 15,000',
        quantity: '4',
        bio: 'Selling this 2nd hand Nintendo Switch. Bought only 2 months ago. Still in good condition. Minor Scratches on the side.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Assorted Toys',
        seller: 'Oninolan',
        price: '₱ 500',
        quantity: '1',
        bio: 'These includes stuffed toys, legos, toy cars, and others. Text me if you want to know more.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'iPhone 11',
        seller: 'Oninolan',
        price: '₱ 47,000',
        quantity: '1',
        bio: 'Selling this 2nd hand iPhone 11. Bought only 2 months ago. Still in good condition. 90% battery life.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619'
    },
    {
        iName: 'Molten Limited Edition Basketball',
        seller: 'Lop3arth',
        price: '₱ 5,000',
        quantity: '1',
        bio: 'Selling this 2nd hand Basketball. Selling this because I hate basketball.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'Drone',
        seller: 'Lop3arth',
        price: '₱ 15,000',
        quantity: '3',
        bio: 'Selling this brand new Drone. Box not opened.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'Galaxy Z Flip',
        seller: 'Lop3arth',
        price: '₱ 50,000',
        quantity: '5',
        bio: 'Selling this brand new Galazy Z Flip. Opened for testing only.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'Gucci Jacket',
        seller: 'Lop3arth',
        price: '₱ 5,000',
        quantity: '1',
        bio: 'Selling this 2nd hand Gucci Jacket. Selling this because it\'s not my style anymore.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'MacBook Pro 2017',
        seller: 'Lop3arth',
        price: '₱ 72,000',
        quantity: '1',
        bio: 'Selling this 2nd hand Macbook. Selling this because I need money.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'Boxing Gloves',
        seller: 'MannyP',
        price: '₱ 12,000',
        quantity: '1',
        bio: 'Selling this old Boxing Gloves that I used during my battle with Mayweather.',
        MOD: 'Paypal',
        meet_location: 'Quezon',
        contact: '09165482619'
    },
    {
        iName: 'Taylor Swift Lover LP',
        seller: 'Tswift',
        price: '₱ 1,000',
        quantity: '1',
        bio: 'Selling my brand new album "Lover". I love my swifties!',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231'
    },
    {
        iName: 'Metal Straw Set',
        seller: 'GretaThunberg',
        price: '₱ 150',
        quantity: '1',
        bio: 'Selling Metal Straw Sets. Let\'s save the turtles and the environment.',
        MOD: 'Paypal',
        meet_location: 'Sweden',
        contact: '09161231231'
    }
];
// calls the function insertMany() defined in the `database` object in `./models/db.js`
// stores the objects in `user` in the collection (table) `profiles`
db.insertMany(collection, items);