const Joi = require('joi');

// Para crear un paciente (POST)
const createPacienteSchema = Joi.object({
  dni: Joi.string().required(),
  nombre: Joi.string().min(1).max(50).required(),
  apellido: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Para actualizar un paciente (PUT)
const updatePacienteSchema = Joi.object({
  dni: Joi.string(),  
  nombre: Joi.string().min(1).max(50),
  apellido: Joi.string().min(1).max(50),
  email: Joi.string().email(),
  password: Joi.string().min(6)
}).min(1); // Se exige al menos un campo

module.exports = {
  createPacienteSchema,
  updatePacienteSchema
};
