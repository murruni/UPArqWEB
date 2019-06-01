const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

/*
GET    /users  (retorna la información de todos los usuarios)
GET    /users/X  (retorna la información de un usuario específico)
POST   /users  (creación de un nuevo usuario)
POST   /users/authenticate  (autenticación de un usuario) 
PUT    /users/X  (actualización de la información de un usuario)
PATCH  /users/X  (actualización del nombre de usuario o email)
DELETE /users/X  (elimina un usuario específico)
GET    /users/X/houses (devuelve todas las casas del usuario X)
*/

// basic path /api/users/
router.get('/', user_controller.getAll);
router.get('/:id', user_controller.get);
router.get('/:id/houses', user_controller.getHouses);
router.post('/', user_controller.create);
router.post('/authenticate', user_controller.authenticate);
router.put('/:id', user_controller.update);
router.patch('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);

module.exports = router;