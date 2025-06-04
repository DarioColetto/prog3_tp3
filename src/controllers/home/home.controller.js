const pacienteService = require("../../services/paciente.service.js");
const turnoService = require("../../services/turno.service.js");

class HomeController {

    

  
  async renderHome(req, res) {
    try {
      const pacientes = await pacienteService.list();
      const turnos = await turnoService.list();

      res.render("index", { pacientes, turnos, message: "Bienvenido a la aplicación de gestión de turnos" });
    } catch (error) {
      res
        .status(500)
        .json({
          error: error.message || "Error al cargar la página de inicio",
        });
    }
  }

  async renderCreatePaciente(req, res) {
    try {
      res.render("crearPaciente");
    } catch (error) {
      res
        .status(500)
        .json({
          error:
            error.message ||
            "Error al cargar la página de creación de paciente",
        });
    }
  }

  async crearTurno(req, res) {
    const { idPaciente, fechaHora } = req.body;
    console.log(req.body);

    const nuevoTurno = {
      idPaciente: idPaciente,
      fechaHora: fechaHora,
    };

    console.log(nuevoTurno);

    await turnoService
      .create(nuevoTurno)
      .then((nuevoTurno) => {
        
       res.status(201).json({
          message: "Turno creado",
          idTurno: nuevoTurno.id,
        });
    
    })

      .catch((error) => {
        res.render("index", {
          error: error.message || "Error al crear el turno",
        });
      });
  }
}

module.exports = new HomeController();
