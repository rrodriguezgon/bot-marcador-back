const mongoose = require('mongoose');

const comandos = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    parametros: Array,
    tipo: String,
    intervalo: Number,
    ultimaFechaEjecucion: Date,
    activo: Boolean,
    lanzado: Boolean,
})

module.exports = mongoose.model("comandos", comandos);