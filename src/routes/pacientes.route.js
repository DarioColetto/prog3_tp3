const {Router} = require('express');
const validate = require('../middlewares/validate');
const rutaPacientes = Router();
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const { createPacienteSchema, updatePacienteSchema } = require('../schema/pacientesSchema.js');


rutaPacientes.get('/', verifyTokenMiddleware ,pacientesController.list);
rutaPacientes.post('/'   ,pacientesController.create);
rutaPacientes.put('/:id' ,verifyTokenMiddleware ,pacientesController.update);
rutaPacientes.delete('/:id', verifyTokenMiddleware ,validate(updatePacienteSchema) ,pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;