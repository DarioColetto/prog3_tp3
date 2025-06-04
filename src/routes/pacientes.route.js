const {Router} = require('express');
const rutaPacientes = Router();
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');

rutaPacientes.get('/' ,pacientesController.list);
rutaPacientes.post('/',pacientesController.create);
rutaPacientes.put('/:id' ,pacientesController.update);
rutaPacientes.delete('/:id' ,pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;