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
    
    try {
    
    const { dni, nombre, apellido, email, password } = req.body;
    const nuevoPaciente = {'dni': dni, 'nombre': nombre, 'apellido': apellido, 'email': email, 'password': password};
    const pacienteCreado = await pacienteService.create(nuevoPaciente);
      res.status(201).json({ message: "Paciente creado", id: pacienteCreado.id });
    } catch (error) {
      res.status(400).json({ error: error.message || "Error al crear el paciente" });
    }
  }


  async delete(req, res) {
    try{
  
    const id = req.params.id;
    

    //Devuelve 0 si no se encuentra el paciente
    await pacienteService.delete(id);
    res.status(200).json({ message: "Paciente borrado correctamente", id: id });

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
      const nuevoPaciente = {'dni': dni, 'nombre': nombre, 'apellido': apellido, 'email': email, 'password': password};
     
      await pacienteService.update(id, nuevoPaciente);

      res.status(200).json({ message: "actualizado", "id":id });

    }
    catch (error) {
      res.status(404).json({ message: error.message || "error al actualizar el paciente" });
    }
  }
}

module.exports = new PacientesController();
