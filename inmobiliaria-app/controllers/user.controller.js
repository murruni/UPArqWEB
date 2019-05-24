const User = require('../models/user');

exports.getAll = (req, res, next) => {
    User.find({}, function (err, users) {
        if (err) return next(err);
        res.send(users);
    });
};

exports.create = (req, res, next) => {
    let usr = getBodyUser(req);
    if (!usr.user || !usr.pass) {
        res.status(400).send('Missing parameters. User & Pass are required.');
        next();
    }
    /** @todo validar que no exista el mismo usuario */
    usr.save(function (err) {
        if (err) return next(err);
        // tal como sale de la db? no filtro campos?
        res.send(usr);
    });
};

exports.get = (req, res, next) => {
    let user = getUrlUserField(req);
    User.findOne({ "user": user }, function (err, usr) {
        if (err) return next(err);
        res.send(usr);
    });
};

exports.update = (req, res, next) => {
    let user = getUrlUserField(req);
    let usrGiven = getBodyUser(req);
    User.findOne({ "user": user }, function (err, usr) {
        if (err) return next(err);
        usr.copyAttributesFrom(usrGiven);
        usr.save(function (err) {
            if (err) return next(err);
            // tal como sale de la db? no filtro campos?
            res.send(usr);
        });
    });
};

exports.delete = (req, res, next) => {
    let user = getUrlUserField(req);
    User.deleteOne({ "user": user }, function (err, usr) {
        if (err) return next(err);
        res.send(usr);
    });
};

exports.authenticate = (req, res, next) => {
    let usrGiven = getBodyUser(req);
    User.findOne({ 'user': usrGiven.user }, function (err, usrFound) {
        if (err) return next(err);
        if (usrFound.validateLogin(usrGiven)) res.send(true);
        res.send(false);
    });
};

// -------------------------------------------------------------------
/** @returns User */
function getBodyUser(req) {
    var user = new User();
    /** @todo desconfiar de los datos */
    if (req.body.user) user.user = req.body.user;
    if (req.body.pass) user.pass = req.body.pass;
    if (req.body.email) user.email = req.body.email;
    return user;
}

/** @returns user field */
function getUrlUserField(req) {
    /** @todo desconfiar de los datos */
    return req.params.user;
}