const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    name: { type: String, required: true, max:  100},
    description: String
});

// Export the model
module.exports = mongoose.model('Location', LocationSchema);

/** Mapping location attributes  */
module.exports.prototype.copyAttributesFrom = function (location) {
    if (location.name) this.name = location.name;
    if (location.description) this.description = location.description;
};