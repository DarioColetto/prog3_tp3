const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.js');
const Paciente = require('./paciente.entity.js');



const Turno =  sequelize.define('Turno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idPaciente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaHora: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

Turno.belongsTo(Paciente, {
  foreignKey: 'idPaciente', // Nombre de la columna en la tabla Turno
  as: 'paciente'
});

Paciente.hasMany(Turno, {
  foreignKey: 'idPaciente',
  as: 'turnos'
});

module.exports = Turno;