const Torneo = require("../models/torneos");
const moment = require("moment");

const getAllTorneos = async () => {
  try {
    return await Torneo.find({ estado: {$ne: 'FINISHED'}}).sort('fechaInicioDate');
  } catch (err) {
    throw err;
  }
};

const getAllTorneosWithFilters = async (filtersParams) => {
  try {
    let filters = {};
  
    if (filtersParams.nombre) {
      Object.assign(filters, { nombre: { $regex: filtersParams.nombre }});
    }

    if (filtersParams.estado) {
      Object.assign(filters, { estado: filtersParams.estado});
    }

    if (!filtersParams.terminado) {
      Object.assign(filters, { estado: {$ne: 'FINISHED'}});
    }

    if (filtersParams.date) {
      const today = moment(filtersParams.date).format('LL');
      Object.assign(filters, {
        fechaInicioDate: {
          $gte: today,
        },
      });
    }

    if (filtersParams.type) {
      Object.assign(filters, { tipo: filtersParams.type});
    }
  
    return await Torneo.find(filters).sort('fechaInicioDate');
  } catch (err) {
    throw err;
  }
};

const getTorneoById = async (id) => {
  try {
    return await Torneo.findById(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllTorneos,
  getAllTorneosWithFilters,
  getTorneoById,
};
