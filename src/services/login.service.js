const Config = require("../config/config.js");
const jwt = require("jsonwebtoken");
const pacienteService = require("./paciente.service.js");

class LoginService {
    async validate(email, password) {
        try {
            const paciente = await pacienteService.getByEmail(email);

            // Verificar si el paciente existe y si la contraseña es correcta
            if (!paciente || paciente.password !== password) {
                console.log("Invalid email or password for email:", email);
                throw new Error("Invalid email or password");
            }

            // payload, secreto, tiempo de expiracion
            const payload = {
                userId: paciente.id,
                userEmail: paciente.email,
            };

            // Generar el token JWT
            const token = jwt.sign(payload, Config.secreteWord, {
                expiresIn: Config.expiresIn,
            });



            return token;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Método para generar un token de administrador.
     * Solo se debe usar en entornos de desarrollo.
     * @returns {Promise<string>} - Retorna un token JWT para el administrador
     */
    async adminLogin() {
        try {
            // payload, secreto, tiempo de expiracion
            const payload = {
                userId: 1,
                userEmail: "admin@email.com"
            };
            // Generar el token JWT
            const token = jwt.sign(payload, Config.secreteWord, {
                expiresIn: Config.expiresIn,
            });
            return token;
        } catch (error) {
            throw error;
        }   
    }

}

module.exports = new LoginService();
