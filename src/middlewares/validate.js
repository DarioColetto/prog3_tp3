function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        mensaje: 'Error de validación',
        detalles: error.details.map(d => d.message)
      });
    }

    req.body = value; // reemplaza con datos validados y limpios
    next();
  };
}

module.exports = validate;
