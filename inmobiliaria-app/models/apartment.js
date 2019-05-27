const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ApartmentSchema = new Schema({
    description: String,
});

// Export the model
module.exports = mongoose.model('Apartment', ApartmentSchema);

// module.exports.prototype.someFunction = function () {};
