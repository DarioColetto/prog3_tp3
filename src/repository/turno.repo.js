const Turno = require('../models/sqlite/entities/turno.entity.js');

class TurnoRepository{
    
    async list() {
        return await Turno.findAll();
    }
    
    async getAllById(id) {
        return await Turno.findAll( { where: { pacienteId: id } });
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
}

module.exports = new TurnoRepository();