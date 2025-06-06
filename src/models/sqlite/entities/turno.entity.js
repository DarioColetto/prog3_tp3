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


// Turno pertenece a Paciente
Turno.belongsTo(Paciente, {
  foreignKey: 'idPaciente',
  as: 'paciente',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Paciente tiene muchos Turnos
Paciente.hasMany(Turno, {
  foreignKey: 'idPaciente',
  as: 'turnos',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  hooks: true
});




module.exports = Turno;