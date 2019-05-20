const User = require('../models/user');

exports.getAll = (req, res, next) => {
    User.find({}, function (err, users) {
        if (err) return next(err);
        res.send(users);
    });    
};

exports.create = (req, res, next) => {
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let pass = req.body.pass;

    // valido los datos ingresados, falta mejorar
    if (!id || !name || !pass) {
        res.status(400).send('Missing parameters. ID, name & pass are required.');
        next();
    }

    let user = new User({
        id: id,
        name: name,
        pass: pass
    });

    user.save(function (err) {
        if (err) return next(err);
        // tal como sale de la db? no filtro campos?
        res.send(user);
    });
};

exports.get = (req, res, next) => {
    let id = parseInt(req.params.id);

    User.findOne({ "id": id }, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};

exports.update = (req, res, next) => {
    // falta codear
};

exports.delete = (req, res, next) => {
    let id = parseInt(req.params.id);

    User.deleteOne({ "id": id }, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};