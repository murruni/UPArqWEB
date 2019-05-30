const Location = require('../models/location');


exports.getAll = (req, res, next) => {
    Location.find({}, function (err, locations) {
        if (err) return next(err);
        res.send(locations);
    });
};


exports.create = (req, res, next) => {
    let location = getBodyUser(req);
    if (!location.name) {
        res.status(400).send('Missing parameters. Name is required.');
        next();
    }
    /** @todo validar que no exista el mismo usuario */
    location.save(function (err) {
        if (err) return next(err);
        // tal como sale de la db? no filtro campos?
        res.send(location);
    });
};


exports.get = (req, res, next) => {
    let name = getLocationName(req);
    Location.findOne({ "name": name }, function (err, location) {
        if (err) return next(err);
        res.send(location);
    });
};

exports.update = (req, res, next) => {
    let name = getLocationName(req);
    let usrGiven = getBodyUser(req);
    Location.findOne({ "name": name }, function (err, location) {
        if (err) return next(err);
        location.copyAttributesFrom(usrGiven);
        location.save(function (err) {
            if (err) return next(err);
            // tal como sale de la db? no filtro campos?
            res.send(location);
        });
    });
};

exports.delete = (req, res, next) => {
    let location = getLocationName(req);
    Location.deleteOne({ "name": location }, function (err, location) {
        if (err) return next(err);
        res.send(location);
    });
};



/** @returns Location */
function getBodyUser(req) {
    var location = new Location();
    /** @todo desconfiar de los datos */
    if (req.body.name) location.name = req.body.name;
    if (req.body.description) location.description = req.body.description;
    return location;
}

/** @returns location name*/
function getLocationName(req) {
    /** @todo desconfiar de los datos */
    return req.params.location;
}