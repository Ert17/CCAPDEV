const db = require('/models/db.js');

const User = require('/models/UserModel.js');
const Item = require('/models/ItemModel.js');
const Request = require('/models/RequestModel.js');
const Review = require('/models/ReviewModel.js');

db.connect();

db.deleteMany(User);
db.deleteMany(Item);
db.deleteMany(Request);
db.deleteMany(Review);