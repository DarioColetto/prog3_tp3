const TurnoService = require('../../services/turno.service');

//Todo: Cambiar por el modelo de datos que se esté utilizando

class TurnosController {
  getByPaciente(req, res) {
    const idPaciente = req.params.idPaciente;

    
    const turnos = turnosModel.getByPaciente(idPaciente);
    res.json(turnos);
  }

  delete(req, res) {
    const idTurno = req.params.idTurno;
    const deleted = turnosModel.delete(idTurno);
    if (deleted) {
      res.json({ message: "Turno cancelado correctamente" });
    } else {
      res.status(404).json({ error: "No se encontró el turno" });
    }
  }

  create(req, res) {
    try {
      const { idPaciente, fechaHora } = req.body;
      if (!idPaciente || !fechaHora) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
      }
      const turno = {
        idPaciente: Number(idPaciente),
        fechaHora: new Date(fechaHora)
      };
      const nuevoTurno = turnosModel.create(turno);
      res.status(201).json(nuevoTurno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TurnosController();