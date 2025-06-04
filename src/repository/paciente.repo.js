const { Paciente } = require('../models/paciente.model');

class PacienteRepository {

    async list() {
        return await Paciente.findAll();
    }
    
    async getById(id) {
        return await Paciente.findByPk(id);
    }
    
    async create(data) {
        return await Paciente.create(data);
    }
    
    async update(id, data) {
        return await Paciente.update(data, { where: { id } });
    }
    
    async delete(id) {
        return await Paciente.destroy({ where: { id } });
    }
     
}

module.exports = new PacienteRepository();