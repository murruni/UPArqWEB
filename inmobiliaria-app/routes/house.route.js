const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/house.controller');

/*
Houses: (las búsquedas solo serán por barrio y venta/alquiler)

GET /houses  (retorna todos las casas)
GET /houses/Y  (retorna una casa específico)
GET /houses?location=X&sale=true  (retorna casas de un barrio y en venta o en alquiler si es false)
POST /houses  (creación de una nueva casa)
PUT /houses/Y  (actualización información de una casa)
DELETE /houses/Y  (elimina una casa)
*/

module.exports = router;