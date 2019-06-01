const express = require('express');
const router = express.Router();

const location_controller = require('../controllers/location.controller');

/*
Locations: (solo trabajaremos en capital federal)

GET /locations  (retorna todos los barrios)
GET /locations/Z  (retorna un barrio )
GET /locations?name=X  (retorna un barrio )
POST /locations  (creación de un nuevo barrio)
PUT /locations/Z  (actualización información de un barrio)
DELETE /locations/Z  (elimina un barrio)
*/

// basic path /api/locations/
router.get('/', location_controller.getAll);
router.get('/:id', location_controller.get);
router.post('/', location_controller.create);
router.put('/:id', location_controller.update);
router.delete('/:id', location_controller.delete);

module.exports = router;