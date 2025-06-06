const loginService = require("../../services/login.service");

class LoginController {
  
  async login(req, res) {
    try {
      const { email, password } = req.body || {};

      const token = await loginService.validate(email, password);

      console.log("Token generated:", token);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  /**
   *  Método para generar un token de administrador.
   *  Solo se debe usar en entornos de desarrollo.
   **/
  async adminLogin(req, res) {
    try {
      const token = await loginService.adminLogin();

      //console.log("Admin token generated:", token);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new LoginController();
