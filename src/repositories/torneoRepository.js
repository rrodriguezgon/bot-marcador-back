const Torneo = require("../models/torneos");

const getAllTorneos = async () => {
  try {
    return await Torneo.find();
  } catch (err) {
    throw err;
  }
};

const getAllTorneosWithFilters = async (filtersParams) => {
  try {
    console.log(filtersParams.nombre);

    let filters = {};
  
    if (filtersParams.nombre) {
      Object.assign(filters, { nombre: { $regex: filtersParams.nombre }});
    }

    if (filtersParams.date) {
      Object.assign(filters, { 'fechaInicio': { $lt: new Date(filtersParams.date) } });
    }

    console.log(filters);
    return await Torneo.find(filters);
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
