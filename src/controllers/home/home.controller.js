const pacienteService = require("../../services/paciente.service.js");
const turnoService = require("../../services/turno.service.js");

class HomeController {

    

  
  async renderHome(req, res) {
    try {
      const pacientes = await pacienteService.list();
      //const turnos = await turnoService.list();

    const turnos = await turnoService.getTurnosWithPacientes();

    // turnos.forEach((turno) => {
    // const { fechaHora, paciente } = turno;
    // console.log(`Turno: ${fechaHora}, Paciente: ${paciente.nombre} ${paciente.apellido}`);
    // }
    // );
        
    
      res.render("index", { pacientes, turnos });
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

  

  
}

module.exports = new HomeController();
