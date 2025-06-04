const { DataTypes } = require('sequelize');



module.exports = (sequelize) => sequelize.define('Turno', {
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


