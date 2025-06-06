const {Router} = require('express');
const loginController = require('../controllers/API/login.controller.js');
const rutaLogin = Router();
const validate = require('../middlewares/validate');
const { loginSchema } = require('../schema/authSchema');


rutaLogin.post('/', validate(loginSchema), loginController.login);
rutaLogin.post('/admin', loginController.adminLogin); //Solo para desarrollo

module.exports = rutaLogin;