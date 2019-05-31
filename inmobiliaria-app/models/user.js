const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    user: { type : String , unique : true, required : true, dropDups: true },
    pass: { type : String , required : true},
    email: String,
});

// Export the model
module.exports = mongoose.model('User', UserSchema);

/** Copy all attributes */
module.exports.prototype.copyAttributesFrom = function (usrFrom) {
    if (usrFrom.user) this.user = usrFrom.user;
    if (usrFrom.pass) this.pass = usrFrom.pass;
    if (usrFrom.email) this.email = usrFrom.email;
};

module.exports.prototype.validateLogin = function (usrData) {
    return usrData && this.user === usrData.user && this.pass === usrData.pass;
};