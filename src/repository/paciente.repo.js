const  Paciente = require('../models/sqlite/entities/paciente.entity.js');

class PacienteRepository {

    async list() {
        return await Paciente.findAll();
    }
    
    async getById(id) {
        return await Paciente.findByPk(id);
    }

    async getByEmail(email) {
        return await Paciente.findOne({ where: { email } });
    }
    
    async create(data) {
        return await Paciente.create(data).catch(error => {
            throw new Error(`Error al crear el paciente: ${error.message}`);
    })
    }
    
    async update(id, data) {
        return await Paciente.update(data, { where: { id } }).then((updated) => {
            if (updated[0] === 0) {
                throw new Error('Paciente no encontrado o no se realizaron cambios');
            }
            return updated;
        }).catch(error => {
            throw new Error(`Error al actualizar el paciente: ${error.message}`);
        })
    }
    
    async delete(id) {
        return await Paciente.destroy({ where: { id } }).then((deleted) => {
            if (deleted === 0) {
                throw new Error('Paciente no encontrado');
            }
            return deleted;
        }).catch(error => {
            throw new Error(`Error al borrar el paciente: ${error.message}`);
        })
        
        
    }
     
}

module.exports = new PacienteRepository();