const torneoRepository = require("../repositories/torneoRepository");

const getAllTorneos = async () => {
  return await torneoRepository.getAllTorneos().catch((err) => {
    throw err;
  });
};

const getAllTorneosWithFilters = async (filters) => {
  return await torneoRepository
    .getAllTorneosWithFilters(filters)
    .catch((err) => {
      throw err;
    });
};

const getTorneoById = async (id) => {
  return await torneoRepository.getTorneoById(id).catch((err) => {
    throw err;
  });
};

const updateTorneo = async (id, torneo) => {
  return await torneoRepository.updateTorneo(id, torneo).catch((err) => {
    throw err;
  });
};

const deleteTorneo = async (id) => {
  return await torneoRepository.deleteTorneo(id).catch((err) => {
    throw err;
  });
};

module.exports = {
  getAllTorneos,
  getAllTorneosWithFilters,
  getTorneoById,
  updateTorneo,
  deleteTorneo,
};
