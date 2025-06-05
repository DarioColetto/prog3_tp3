const {Router} = require('express');
const home = require('../controllers/home/home.controller.js');


const rutaHome = Router();
rutaHome.get('/', home.renderHome);
rutaHome.get('/pacienteForm', home.renderCreatePaciente);


//Otras rutas CRUD


module.exports = rutaHome;






