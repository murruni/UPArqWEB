const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/house.controller');

/*
Houses: (las búsquedas solo serán por barrio y venta/alquiler)

GET /houses  (retorna todos las casas)
GET /houses/Y  (retorna una casa específico)
GET /houses/sales (retorna casas en venta)
GET /houses/rentals (retorna casas en alquiler)
GET /houses/locations/Y  (retorna casas de un barrio)
GET /houses/sales/locations/Y  (retorna casas de un barrio en venta)
GET /houses/rentals/locations/Y  (retorna casas de un barrio en alquiler)
POST /houses  (creación de una nueva casa)
PUT /houses/Y  (actualización información de una casa)
DELETE /houses/Y  (elimina una casa)
Locations: (solo trabajaremos en capital federal)

GET /locations  (retorna todos los barrios)
GET /locations/Z  (retorna un barrio )
POST /locations  (creación de un nuevo barrio)
PUT /locations/Z  (actualización información de un barrio)
DELETE /locations/Z  (elimina un barrio)
*/

module.exports = router;