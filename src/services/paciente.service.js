const repo = require('../repository/paciente.repo');

class PacienteService {

    async list() {

        

        return await repo.list();
    }
    
    async getById(id) {
        return await repo.getById(id);
    }
    
    async create(data) {
        // Check if the required fields are present
        if (!data.dni || !data.nombre || !data.apellido || !data.email || !data.password) {
            throw new Error('Faltan algun campo requerido: dni, nombre, apellido, email, password');
        }

        // Check if the email already exists
        const existingPaciente = await repo.getByEmail(data.email);
        if (existingPaciente) {
            throw new Error('Ya existe un paciente con ese email');
        }

        return await repo.create(data);
    }
    
    async update(id, data) {

        // Check if the required fields are present
        if (!data.dni || !data.nombre || !data.apellido || !data.email || !data.password) {
            throw new Error('Faltan algun campo requerido: dni, nombre, apellido, email, password');
        }

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
