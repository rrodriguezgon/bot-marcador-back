const Comando = require("../models/comandos");
const { Types } = require('mongoose');

const getAllComandos = async () => {
  try {
    return await Comando.find();
  } catch (err) {
    throw err;
  }
};

const getAllComandosWithFilters = async (filtersParams) => {
  try {
    let filters = {};
  
    if (filtersParams.nombre) {
      Object.assign(filters, { nombre: { $regex: filtersParams.nombre }});
    }

    if (filtersParams.tipo) {
      Object.assign(filters, { tipo: filtersParams.tipo});
    }

    return await Comando.find(filters);
  } catch (err) {
    throw err;
  }
};

const getComandoById = async (id) => {
  try {
    return await Comando.findById(id);
  } catch (err) {
    throw err;
  }
};

const createComando = async (newcomando) => {
  Object.assign(newcomando, {_id: new Types.ObjectId()});

  const comando = new Comando(newcomando);

  return await comando.save().catch((err) => {
    throw err;
  });
};

const updateComando = async (id, upcomando) => {

  return await Comando
    .findByIdAndUpdate(id, upcomando, {
      new: true,
      upsert: true, // Make this update into an upsert
    })
    .catch((err) => {
      throw err;
    });
};

const deleteComando = async (id) => {

  return await Comando
    .findByIdAndDelete(id)
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getAllComandos,
  getAllComandosWithFilters,
  getComandoById,
  createComando,
  updateComando,
  deleteComando,
};
