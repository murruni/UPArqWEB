const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/apartment.controller');

/*
Apartments: (las búsquedas solo serán por barrio y venta/alquiler)
GET /apartments  (retorna todos los departamentos)
GET /apartments/X  (retorna un departamento específico)
GET /apartments?location=Palermo&sale=true  (retorna departamentos de un barrio y en venta o en alquiler si es false)
POST /apartments  (creación de un nuevo departamento)
PUT /apartments/X  (actualización información de departamento)
DELETE /apartments/X  (elimina un departamento)
*/


module.exports = router;