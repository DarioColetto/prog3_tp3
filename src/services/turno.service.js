const repo = require('../repository/turno.repo');

class TurnoService {

    async list() {
        return await repo.list();
    }
    
    async getAllById(id) {

    if (!id) {
        throw new Error('ID es requerido para obtener los turnos');
    }
    
        return await repo.getAllById(id);
    }
    
    async create(turno) {
        
        if (!turno.idPaciente || !turno.fechaHora) {
            throw new Error('ID del paciente y fecha/hora son requeridos para crear un turno');
        }
      
       return await repo.create(turno)
           
    }
    
    async update(id, data) {
        return await repo.update(id, data);
    }
    
    async delete(id) {
        if (!id) { 
            throw new Error('ID del turno es requerido');
        }
        return await repo.delete(id);
    }

    async getTurnosWithPacientes() {
        return await repo.getTurnosWithPacientes();
    }
    
}

module.exports = new TurnoService();