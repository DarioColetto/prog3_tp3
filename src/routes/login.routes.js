const {Router} = require('express');
const loginController = require('../controllers/API/login.controller.js');
const rutaLogin = Router();


rutaLogin.post('/login', loginController.login);

module.exports = rutaLogin;