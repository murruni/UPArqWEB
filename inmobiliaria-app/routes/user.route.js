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

GET    /users/X/apartments (devuelve todos los departamentos del usuario X)
GET    /users/X/apartments/Y (devuelve el departamento Y del usuario X)
PUT    /users/X/apartments/Y (actualiza el departamento Y del usuario X)
GET    /users/X/houses (devuelve todas las casas del usuario X)
GET    /users/X/houses/Y (devuelve la casa Y del usuario X)
PUT    /users/X/houses/Y (actualiza la casa Y del usuario X)
*/

// basic path /api/users/
router.get('/', user_controller.getAll);
router.get('/:user', user_controller.get);
router.post('/', user_controller.create);
router.post('/authenticate', user_controller.authenticate);
router.put('/:user', user_controller.update);
router.patch('/:user', user_controller.update);
router.delete('/:user', user_controller.delete);

module.exports = router;