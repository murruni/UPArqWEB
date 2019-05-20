const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, max: 100 },
    pass: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model('User', UserSchema);