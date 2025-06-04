const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");
const pacienteService = require("./paciente.service.js");

class LoginService {

 
  validate(email, password) {
    return new Promise((resolve, reject) => {
      try {
        const paciente = pacienteService.getByEmail(email)

        if (!paciente || paciente.password !== password) {
          throw new Error("wrong email or password");
        }

        //payload, secreto, tiempo de expiracion
        const payload = {
          userId: paciente.id,
          userEmail: paciente.email,
        };
        // Generar el token JWT
        const token = jwt.sign(payload, Config.secreteWord, {
          expiresIn: Config.expiresIn,
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new LoginService();