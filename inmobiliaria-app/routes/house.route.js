const express = require('express');
const router = express.Router();

const house_controller = require('../controllers/house.controller');

/*
Houses: (las búsquedas solo serán por barrio y venta/alquiler)

GET /houses  (retorna todos las casas)
GET /houses/Y  (retorna una casa específico)
GET /houses?location=X&sale=true  (retorna casas de un barrio y en venta o en alquiler si es false)
POST /houses  (creación de una nueva casa)
PUT /houses/Y  (actualización información de una casa)
DELETE /houses/Y  (elimina una casa)
*/

router.get('/', house_controller.getAll);
router.get('/:id', house_controller.get);
router.post('/', house_controller.create);
router.put('/:id', house_controller.update);
router.delete('/:id', house_controller.delete);

module.exports = router;