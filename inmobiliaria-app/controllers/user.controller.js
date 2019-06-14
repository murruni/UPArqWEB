const User = require('../models/user');

exports.getAll = (req, res, next) => {
    User.find({}, function (err, users) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(503).send('Service Unavailable');
            }
            return next(err);
        }
        res.send(users);
    });
};

exports.getHouses = (req, res, next) => {
    let id = getUrlIdField(req);
    User.findById(id)
        .populate('houses')
        .exec(function (err, user) {
            if (err) {
                if (err.name == 'CastError' && err.kind == 'ObjectId') {
                    res.status(400).send('Not user found');
                }
                console.log(err);
                return next(err);
            }
            res.send(user.houses);
        });
};

exports.create = (req, res, next) => {
    let usr = getBodyUser(req);
    if (!usr.user || !usr.pass) {
        res.status(400).send('Missing parameters. User & Pass are required.');
        return next();
    }
    usr.save(function (err) {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                res.status(400).send('User already exists.');
            }
            return next(err);
        }
        res.status(201).send(usr);
    });
};

exports.get = (req, res, next) => {
    let id = getUrlIdField(req);
    User.findById(id, function (err, usr) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(404).send('Not user found');
            }
            return next(err);
        }
        res.send(usr);
    });
};

exports.update = (req, res, next) => {
    let id = getUrlIdField(req);
    let usrGiven = getBodyUser(req);
    User.findById(id, function (err, usr) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not user found');
            }
            return next(err);
        }
        usr.copyAttributesFrom(usrGiven);
        usr.save(function (err) {
            if (err) return next(err);
            res.send(usr);
        });
    });
};

exports.delete = (req, res, next) => {
    let id = getUrlIdField(req);
    User.findByIdAndDelete(id, function (err, usr) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not user found');
            }
            return next(err);
        }
        res.send(usr);
    });
};

exports.authenticate = (req, res, next) => {
    let usrGiven = getBodyUser(req);
    User.findOne({ 'user': usrGiven.user }, function (err, usrFound) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not user found');
            }
            return next(err);
        }
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
    if (req.body.houses) user.houses = req.body.houses;
    return user;
}

/** @returns id field */
function getUrlIdField(req) {
    /** @todo desconfiar de los datos */
    return req.params.id;
}