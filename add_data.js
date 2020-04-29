
const db = require('./models/db.js');

const User = require('./models/UserModel.js');
const Item = require('./models/ItemModel.js');
const Request = require('./models/RequestModel.js');
const Review = require('./models/ReviewModel.js');

db.connect();

// Users COLLECTION
// var users = [
//     {
//         fName: 'Gabriel',
//         lName: 'Olan',
//         pw: '1234',
//         username: 'Oninolan',
//         bio: 'Hi! My name is Olan and I love selling things!',
//         photo: 'img/olan.jpg'
//     },
//     {
//         fName: 'Earth',
//         lName: 'Lopez',
//         pw: '4321',
//         username: 'Lop3arth',
//         bio: 'My name is Earth! Welcome to my store!',
//         photo: 'img/earth.jpg'
//     },
//     {
//         fName: 'Manny',
//         lName: 'Pacquiao',
//         pw: '1234',
//         username: 'MannyP',
//         bio: 'The people\'s champ and Philippine senator',
//         photo: 'img/manny.jpg'
//     },
//     {
//         fName: 'Greta',
//         lName: 'Thunberg',
//         pw: '4321',
//         username: 'GretaThunberg',
//         bio: 'Environmentalist and dog lover',
//         photo: 'img/thunberg.jpg'
//     },
//     {
//         fName: 'Taylor',
//         lName: 'Swift',
//         pw: '1234',
//         username: 'Tswift',
//         bio: 'Artist of the decade and mother of meredith',
//         photo: 'img/taylor-swift.jpg'
//     }
// ];
// db.insertMany(User, users);

// ITEMS COLLECTION
var items = [
    {
        iName: 'Dual Shock 4',
        seller: 'Oninolan',
        price: 3000,
        quantity: 4,
        bio: 'Bought too much controller.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/dual.jpg'
    },
    {
        iName: 'Ferrari',
        seller: 'Oninolan',
        price: 50000000,
        quantity: 1,
        bio: 'Selling this brand new Ferrari.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/ferrari.jpg'
    },
    {
        iName: 'Stainless Pot',
        seller: 'Oninolan',
        price: 1000,
        quantity: 1,
        bio: 'Selling this old stainless pot. Condition is good as new. Small crack on the handle.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/pot.jpg'
    },
    {
        iName: 'Stove',
        seller: 'Oninolan',
        price: 2000,
        quantity: 1,
        bio: 'This stove was bought 5 years ago. Selling this because it\'s not being used anymore.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/stove.jpg'
    },
    {
        iName: 'Nintendo Switch',
        seller: 'Oninolan',
        price: 15000,
        quantity: 4,
        bio: 'Selling this 2nd hand Nintendo Switch. Bought only 2 months ago. Still in good condition. Minor Scratches on the side.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/switch.jpg'
    },
    {
        iName: 'Assorted Toys',
        seller: 'Oninolan',
        price: 500,
        quantity: 1,
        bio: 'These includes stuffed toys, legos, toy cars, and others. Text me if you want to know more.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/toys.jpg'
    },
    {
        iName: 'iPhone 11',
        seller: 'Oninolan',
        price: 47000,
        quantity: 1,
        bio: 'Selling this 2nd hand iPhone 11. Bought only 2 months ago. Still in good condition. 90% battery life.',
        MOD: 'Paypal',
        meet_location: 'Laguna',
        contact: '09165482619',
        photo: 'img/iphone.jpg'
    },
    {
        iName: 'Molten Limited Edition Basketball',
        seller: 'Lop3arth',
        price: 5000,
        quantity: 1,
        bio: 'Selling this 2nd hand Basketball. Selling this because I hate basketball.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/basketball.jpg'
    },
    {
        iName: 'Drone',
        seller: 'Lop3arth',
        price: 15000,
        quantity: 3,
        bio: 'Selling this brand new Drone. Box not opened.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/drone.jpg'
    },
    {
        iName: 'Galaxy Z Flip',
        seller: 'Lop3arth',
        price: 50000,
        quantity: 5,
        bio: 'Selling this brand new Galazy Z Flip. Opened for testing only.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/flip.jpg'
    },
    {
        iName: 'Gucci Jacket',
        seller: 'Lop3arth',
        price: 5000,
        quantity: 1,
        bio: 'Selling this 2nd hand Gucci Jacket. Selling this because it\'s not my style anymore.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/jacket.jpg'
    },
    {
        iName: 'MacBook Pro 2017',
        seller: 'Lop3arth',
        price: 72000,
        quantity: 1,
        bio: 'Selling this 2nd hand Macbook. Selling this because I need money.',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/macbook.jpg'
    },
    {
        iName: 'Boxing Gloves',
        seller: 'MannyP',
        price: 12000,
        quantity: 1,
        bio: 'Selling this old Boxing Gloves that I used during my battle with Mayweather.',
        MOD: 'Paypal',
        meet_location: 'Quezon',
        contact: '09165482619',
        photo: 'img/gloves.jpg'
    },
    {
        iName: 'Taylor Swift Lover LP',
        seller: 'Tswift',
        price: 1000,
        quantity: 1,
        bio: 'Selling my brand new album "Lover". I love my swifties!',
        MOD: 'Paypal',
        meet_location: 'Manila',
        contact: '09161231231',
        photo: 'img/lover.jpg'
    },
    {
        iName: 'Metal Straw Set',
        seller: 'GretaThunberg',
        price: 150,
        quantity: 1,
        bio: 'Selling Metal Straw Sets. Let\'s save the turtles and the environment.',
        MOD: 'Paypal',
        meet_location: 'Sweden',
        contact: '09161231231',
        photo: 'img/straw.jpg'
    }
];
db.insertMany(Item, items);

// REVIEWS COLLECTION
var reviews = [
    {
        seller: '',
        iName: 'Drone',
        reviewer: 'Oninolan',
        review: 'Quality product. A++',
        dpreviewer: 'img/olan.jpg'
    },
    {
        seller: 'Oninolan',
        iName: 'Assorted Toys',
        reviewer: 'MannyP',
        review: 'OMg it\'s0 good. My kids love it. Thanks!',
        dpreviewer: 'img/manny.jpg'
    },
    {
        seller: '',
        iName: 'Stainless Pot',
        reviewer: 'GretaThunberg',
        review: 'Finally something I cen use to boil me straws.',
        dpreviewer: 'img/thunberg.jpg'
    },
    {
        seller: 'Tswift',
        iName: '',
        reviewer: 'Oninolan',
        review: 'So accomodating. Appreciates swifties fam <3',
        dpreviewer: 'img/olan.jpg'
    },
    {
        seller: 'Tswift',
        iName: 'Taylor Swift Lover EP',
        reviewer: 'GretaThunberg',
        review: 'Def love this album so much. Thanks',
        dpreviewer: 'img/thunberg.jpg'
    },
    {
        seller: 'MannyP',
        iName: '',
        reviewer: 'Lop3arth',
        review: 'Happy New Year, my fellow seller!',
        dpreviewer: 'img/earth.jpg'
    }
];
db.insertMany(Review, reviews);