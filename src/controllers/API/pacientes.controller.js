const pacienteService = require("../../services/paciente.service.js");


class PacientesController {
  
  async list(req, res) {
    const data = await pacienteService.list();
    res.status(200).json(data);
    
  }


  async create(req, res) {
    const { dni, nombre, apellido, email, password } = req.body;

    if (!dni || !nombre || !apellido || !email || !password) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    try {
      const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);
      const pacienteCreado = await pacienteService.create(nuevoPaciente);
      res.status(201).json({ message: "Paciente creado", id: pacienteCreado.id });
    } catch (error) {
      res.status(500).json({ error: error.message || "Error al crear el paciente" });
    }
  }


  async delete(req, res) {
    try{
  
    const id = req.params.id;
    


    const pacienteBorrado = await pacienteService.delete(id);
    if (!pacienteBorrado) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }

    res.status(200).json(pacienteBorrado);
    }
      catch (error) {
        res
          .status(404)
          .json( error.message  || "error al borrar el paciente");
      };
  }


  async update(req, res) {
    try{
      const id = req.params.id;
      const { dni, nombre, apellido, email, password } = req.body;
      const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);
      const pac = await pacientesModel.update(id, nuevoPaciente);
      res.status(200).json({ message: "actualizado", "id":pac.id });

    }
    catch (error) {
      res.status(404).json({ message: error.message || "error al actualizar el paciente" });
    }
  }
}

module.exports = new PacientesController();
