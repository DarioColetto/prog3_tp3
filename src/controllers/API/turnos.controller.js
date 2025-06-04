const turnoService = require('../../services/turno.service');

//Todo: Cambiar por el modelo de datos que se esté utilizando

class TurnosController {
  async getByPaciente(req, res) {
    
    const idPaciente = req.params.idPaciente;
     await turnoService.getAllById(idPaciente).then((turnos) => {
        res.json(turnos);})
      .catch((error) => {
        res.status(404).json({ error: error.message || "No se encontraron turnos para el paciente" });
      });
    
  }

  async delete(req, res) {
    
    const idTurno = req.params.idTurno;

   

    await turnoService.delete(idTurno).then((deleted) => {
        if (!deleted) {
            throw new Error("No se encontró el turno");
            }
        res.json({ message: "Turno cancelado correctamente", idTurno: idTurno });
    }).catch((error) => {
        res.status(404).json({ error: error.message || "Error al cancelar el turno" });
    });
  }

   async create(req, res) {
  
      const {idPaciente, fechaHora} = req.body;

      

    const nuevoTurno = {
        idPaciente: idPaciente,
        fechaHora: fechaHora
    };

    console.log(nuevoTurno);

      await turnoService.create(nuevoTurno).then((nuevoTurno) => {
        res.status(201).json({ message: "Turno creado", idTurno: nuevoTurno.id });
      }).catch((error) => {
        res.status(400).json({ error: error.message || "Error al crear el turno" });
      });
    }
}
module.exports = new TurnosController();