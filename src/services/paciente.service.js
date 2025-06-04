const repo = require('../repository/paciente.repo');

class PacienteService {

    async list() {
        return await repo.list();
    }
    
    async getById(id) {
        return await repo.getById(id);
    }
    
    async create(data) {
        return await repo.create(data);
    }
    
    async update(id, data) {
        return await repo.update(id, data);
    }
    
    async delete(id) {
        return await repo.delete(id);
    }
    
    async getByEmail(email) {
        return await repo.getByEmail(email);
    }
}

module.exports = new PacienteService();
