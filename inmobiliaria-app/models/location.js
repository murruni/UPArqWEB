const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LocationSchema = new Schema({
    description: { type: String, required: true, max: 100 },    
});

// Export the model
module.exports = mongoose.model('Location', LocationSchema);