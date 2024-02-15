const Comando = require("../models/comandos");

const getAllComandos = async () => {
  try {
    return await Comando.find();
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
  const comando = new Comando(newcomando);

  return await comando.save().catch((err) => {
    throw err;
  });
};

const updateComando = async (id, upcomando) => {

  return await torneo
    .findByIdAndUpdate(id, upcomando, {
      new: true,
      upsert: true, // Make this update into an upsert
    })
    .catch((err) => {
      throw err;
    });
};

const deleteComando = async (id) => {

  return await torneo
    .findByIdAndDelete(id)
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getAllComandos,
  getComandoById,
  createComando,
  updateComando,
  deleteComando,
};
