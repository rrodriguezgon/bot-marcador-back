const comandoRepository = require("../repositories/comandoRepository");

const getAllComandos = async () => {
  return await comandoRepository.getAllComandos().catch((err) => {
    throw err;
  });
};

const getAllComandosWithFilters = async (filters) => {
  return await comandoRepository
    .getAllComandosWithFilters(filters)
    .catch((err) => {
      throw err;
    });
};

const getComandoById = async (id) => {
  return await comandoRepository.getComandoById(id).catch((err) => {
    throw err;
  });
};

const createComando = async (comando) => {
  return await comandoRepository.createComando(comando).catch((err) => {
    throw err;
  });
};

const updateComando = async (id, comando) => {
  return await comandoRepository.updateComando(id, comando).catch((err) => {
    throw err;
  });
};

const deleteComando = async (id) => {
  return await comandoRepository.deleteComando(id).catch((err) => {
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
