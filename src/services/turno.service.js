const repo = require('../repository/turno.repo');

class TurnoService {

    async list() {
        return await repo.list();
    }
    
    async getAllById(id) {
        return await repo.getAllById(id);
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
    
}

module.exports = new TurnoService();