const Turno = require('../models/sqlite/entities/turno.entity.js');
const Paciente = require('../models/sqlite/entities/paciente.entity.js');

class TurnoRepository{
    
    async list() {
        return await Turno.findAll();
    }
    
    async getAllById(id) {
        return await Turno.findAll( { where: { idPaciente: id } });
    }
    
    async create(data) {
        return await Turno.create(data);
    }
    
    async update(id, data) {
        return await Turno.update(data, { where: { id } });
    }
    
    async delete(id) {
        return await Turno.destroy({ where: { id } });
    }

    //JOIN turnos with pacientes where idPaciente matches Paciente.id
    async getTurnosWithPacientes() {
        return await Turno.findAll({
      include: {
        model: Paciente,
        as: 'paciente',
        attributes: ['id', 'nombre', 'apellido']
      }
    });
    }
}



module.exports = new TurnoRepository();