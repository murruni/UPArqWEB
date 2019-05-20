const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/apartment.controller');

/*
Apartments: (las búsquedas solo serán por barrio y venta/alquiler)
GET /apartments  (retorna todos los departamentos)
GET /apartments/X  (retorna un departamento específico)
GET /apartments/sales (retorna departamentos en venta)
GET /apartments/rentals (retorna departamentos en alquiler)
GET /apartments/locations/X  (retorna departamentos de un barrio)
GET /apartments/sales/locations/X  (retorna departamentos de un barrio en venta)
GET /apartments/rentals/locations/X  (retorna departamentos de un barrio en alquiler)
POST /apartments  (creación de un nuevo departamento)
PUT /apartments/X  (actualización información de departamento)
DELETE /apartments/X  (elimina un departamento)
*/


module.exports = router;