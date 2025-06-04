const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');


const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni : {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Paciente;