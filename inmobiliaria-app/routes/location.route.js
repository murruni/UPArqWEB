const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/location.controller');

/*
Locations: (solo trabajaremos en capital federal)

GET /locations  (retorna todos los barrios)
GET /locations/Z  (retorna un barrio )
POST /locations  (creación de un nuevo barrio)
PUT /locations/Z  (actualización información de un barrio)
DELETE /locations/Z  (elimina un barrio)
*/

module.exports = router;