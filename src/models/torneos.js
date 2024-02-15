const mongoose = require('mongoose');

const torneo = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    circuito: String,
    nombre: String,
    linkTorneo: String,
    estado: String,
    timeZone: String,
    localizacion: String,
    fechaInicio: Date,
    fechaFin: Date,
    tipo: String,
    mes: String,
    horarios: [{
        dia: String,
        url: String,
    }],
    cuadros: [{
        genero: String,
        fase: String,
        url: String,
    }],
    linkMarcador: String
});

module.exports = mongoose.model("torneo", torneo);