const loginService = require("../../services/login.service");

class LoginControler {
  async login(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }


      const { email, password } = req.body;
      
      const token = await loginService.validate(email, password);

      res.status(200).json(token);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = new LoginControler();
