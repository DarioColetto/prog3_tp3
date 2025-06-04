const {Router} = require('express');
const rutaPacientes = Router();
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');

rutaPacientes.get('/', verifyTokenMiddleware ,pacientesController.list);
rutaPacientes.post('/',verifyTokenMiddleware ,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware ,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware ,pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;