const pacientesModel = require("./../../models/mock/pacientes.models.js");
const Paciente = require("./../../models/mock/entities/paciente.entity.js");

class PacientesController {
  
  async list(req, res) {
    res.status(200).json(await pacientesModel.list());
  }


  async create(req, res) {
    const { dni, nombre, apellido, email, password } = req.body;

    const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);

    const info = await pacientesModel.create(nuevoPaciente);
    res.status(200).json(info);
  }


  async delete(req, res) {
    try{
    
      
    const id = req.params.id;
    console.log("id del paciente a borrar:", id);


    const pacienteBorrado = await pacientesModel.delete(id);

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
