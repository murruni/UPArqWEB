const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    user: String,
    pass: String,
    email: String,
});

// Export the model
module.exports = mongoose.model('User', UserSchema);

/** Copy all attributes but user */
module.exports.prototype.copyAttributesFrom = function (usrFrom) {
    if (usrFrom.pass) this.pass = usrFrom.pass;
    if (usrFrom.email) this.email = usrFrom.email;
};

module.exports.prototype.validateLogin = function (usrData) {
    return usrData && this.user === usrData.user && this.pass === usrData.pass;
};