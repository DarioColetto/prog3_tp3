const {Router} = require('express');
const home = require('../controllers/home/home.controller.js');
const rutaHome = Router();
rutaHome.get('/', home.renderHome);
rutaHome.get('/crearPaciente', home.renderCreatePaciente);
rutaHome.post('/crearTurno', home.crearTurno);
//Otras rutas CRUD


module.exports = rutaHome;






