class TurnosModel {
  constructor() {
    this.turnos = [
      { id: 1, idPaciente: 1, fechaHora: new Date("2025-06-10T10:00:00") },
      { id: 2, idPaciente: 1, fechaHora: new Date("2025-06-12T11:00:00") },
      { id: 3, idPaciente: 2, fechaHora: new Date("2025-06-15T09:00:00") }
    ];
    this.nextId = 4;
  }

  getByPaciente(idPaciente) {
    return this.turnos.filter(t => t.idPaciente == idPaciente);
  }

  delete(idTurno) {
    const idx = this.turnos.findIndex(t => t.id == idTurno);
    if (idx === -1) return null;
    const [deleted] = this.turnos.splice(idx, 1);
    return deleted;
  }

  create(turno) {
    turno.id = this.nextId++;
    this.turnos.push(turno);
    return turno;
  }
}

module.exports = new TurnosModel();