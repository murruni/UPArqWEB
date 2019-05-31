const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HouseSchema = new Schema({
    description: { type: String, required: true, max: 100 },
    sale: Boolean,
    location: {
        type: Schema.ObjectId,
        ref: 'Location'
    },
});

// Export the model
module.exports = mongoose.model('House', HouseSchema);

/** Copy all attributes but _id */
module.exports.prototype.copyAttributesFrom = function (houseFrom) {
    if (houseFrom.description) this.description = houseFrom.description;
    if (houseFrom.sale) this.sale = houseFrom.sale;
    /** @todo cambiar */
    if (houseFrom.location) this.location = houseFrom.location;
};