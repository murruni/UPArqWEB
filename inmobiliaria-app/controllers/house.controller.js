const House = require('../models/house');

exports.getAll = (req, res, next) => {
    const query = req.query;
    var house = {};
    if (query.location) house.location = query.location;
    if (query.sale) house.sale = JSON.parse(query.sale);

    House.find(house)
        .populate('location')
        .exec(function (err, houses) {
            if (err) return next(err);
            res.send(houses);
        });
};

exports.get = (req, res, next) => {
    let id = getUrlIdField(req);
    House.findById(id)
        .populate('location')
        .exec(function (err, house) {
            if (err) {
                if(err.name == 'CastError' && err.kind == 'ObjectId'){
                    res.status(400).send('Not house found');
                }
                return next(err);
            }
            res.send(house);
        });
};

exports.create = (req, res, next) => {
    let house = getBodyHouse(req);
    if (!house || !house.description) {
        res.status(400).send('Missing parameters. Description are required.');
        next();
    }
    house.save(function (err) {
        if (err) return next(err);
        res.status(201).send(house);
    });
};

exports.update = (req, res, next) => {
    let id = getUrlIdField(req);
    let houseGiven = getBodyHouse(req);
    House.findById(id)
        .populate('location')
        .exec(function (err, house) {
            if (err) {
                if(err.name == 'CastError' && err.kind == 'ObjectId'){
                    res.status(400).send('Not house found');
                }
                return next(err);
            }
            house.copyAttributesFrom(houseGiven);
            house.save(function (err) {
                res.send(house);
            })
        });
}

exports.delete = (req, res, next) => {
    let id = getUrlIdField(req);
    House.findByIdAndDelete(id, function (err, house) {
        if (err) {
            if(err.name == 'CastError' && err.kind == 'ObjectId'){
                res.status(400).send('Not house found');
            }
            return next(err);
        }
        res.send(house);
    });
}

// -------------------------------------------------------------------
/** @returns House */
function getBodyHouse(req) {
    var house = new House();
    /** @todo desconfiar de los datos */
    if (req.body.id) house._id = req.body.id;
    if (req.body.description) house.description = req.body.description;
    if (req.body.location) house.location = req.body.location;
    if (req.body.sale) house.sale = JSON.parse(req.body.sale);
    return house;
}

/** @returns id field */
function getUrlIdField(req) {
    /** @todo desconfiar de los datos */
    return req.params.id;
}