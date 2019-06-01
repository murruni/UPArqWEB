const Location = require('../models/location');

exports.getAll = (req, res, next) => {
    const query = req.query;
    var location = {};
    if (query.name) location.name = query.name;
    Location.find(location, function (err, locations) {
        if (err) return next(err);
        res.send(locations);
    });
};

exports.create = (req, res, next) => {
    let location = getBodyLocation(req);
    if (!location.name) {
        res.status(400).send('Missing parameters. Name is required.');
        next();
    }
    location.save(function (err) {
        if (err) return next(err);
        res.status(201).send(location);
    });
};


exports.get = (req, res, next) => {
    let id = getLocationId(req);
    Location.findById(id, function (err, location) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not location found');
            }
            return next(err);
        }
        res.send(location);
    });
};

exports.update = (req, res, next) => {
    let id = getLocationId(req);
    let locationGiven = getBodyLocation(req);
    Location.findById(id, function (err, location) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not location found');
            }
            return next(err);
        }
        location.copyAttributesFrom(locationGiven);
        location.save(function (err) {
            if (err) return next(err);
            res.send(location);
        });
    });
};

exports.delete = (req, res, next) => {
    let id = getLocationId(req);
    Location.findByIdAndDelete(id, function (err, location) {
        if (err) {
            if (err.name == 'CastError' && err.kind == 'ObjectId') {
                res.status(400).send('Not location found');
            }
            return next(err);
        }
        res.send(location);
    });
};


// ------------------------------------------------------------------------
/** @returns Location */
function getBodyLocation(req) {
    var location = new Location();
    /** @todo desconfiar de los datos */
    if (req.body.name) location.name = req.body.name;
    if (req.body.description) location.description = req.body.description;
    return location;
}

/** @returns location id*/
function getLocationId(req) {
    /** @todo desconfiar de los datos */
    return req.params.id;
}