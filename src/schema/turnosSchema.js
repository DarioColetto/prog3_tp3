const Joi = require('joi');

// POST - Crear turno
const createTurnoSchema = Joi.object({
  idPaciente: Joi.number().integer().required(),
  fechaHora: Joi.date().greater('now').required() // fecha futura
});

// PUT - Actualizar turno
const updateTurnoSchema = Joi.object({
  idPaciente: Joi.number().integer(),
  fechaHora: Joi.date().greater('now')
}).min(1); // al menos un campo

module.exports = {
  createTurnoSchema,
  updateTurnoSchema
};
