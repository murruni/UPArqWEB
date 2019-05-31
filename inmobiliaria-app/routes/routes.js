const express = require('express');
const router = express.Router();

// users routes
router.use('/users', require('./user.route'));

// houses routes
router.use('/houses', require('./house.route'));

// locations routes
router.use('/locations', require('./location.route'));

module.exports = router;