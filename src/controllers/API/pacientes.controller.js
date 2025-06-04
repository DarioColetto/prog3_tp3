const pacienteService = require("../../services/paciente.service.js");

class PacientesController {
  async list(req, res) {
    const data = await pacienteService.list();

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No hay pacientes registrados" });
    }

    res.status(200).json(data);
  }

  async create(req, res) {
    
      const { dni, nombre, apellido, email, password } = req.body;
      const nuevoPaciente = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
      };
      await pacienteService.create(nuevoPaciente).then(
        (paciente) => {;
      res
        .status(201)
        .json({ message: "Paciente creado", id: paciente.id });
    }) .catch((error)  =>{
      res
        .status(400)
        .json({ error: error.message || "Error al crear el paciente" });
    })
  }

  async delete(req, res) {

    const id = req.params.id;
    await pacienteService
      .delete(id)
      .then((deleted) => {
        if (deleted === 0) {
          throw new Error("Paciente no encontrado");
        }
        res
          .status(200)
          .json({ message: "Paciente borrado correctamente", id: id });
      })
      .catch((error) => {
        res.status(404).json(error.message);
      });
  }

  async update(req, res) {
    
      const id = req.params.id;
      const { dni, nombre, apellido, email, password } = req.body;
      const nuevoPaciente = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
      };

      await pacienteService.update(id, nuevoPaciente).then((updated) => {
        if (updated[0] === 0) {
          throw new Error("Paciente no encontrado o no se realizaron cambios");
        }
        res.status(200).json({ message: "actualizado", id: id });
      }).catch((error) => {
        res.status(400).json({ error: error.message || "Error al actualizar el paciente" });
      })

    
  }
}

module.exports = new PacientesController();
