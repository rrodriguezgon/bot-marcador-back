const torneoRepository = require('../repositories/torneoRepository');

const getAllTorneos = async () => {
    try {
        return await torneoRepository.getAllTorneos();
    } catch(err){
        throw err;
    }
};

const getAllTorneosWithFilters = async (filters) => {
    try {
        return await torneoRepository.getAllTorneosWithFilters(filters);
    } catch(err){
        throw err;
    }
};

const getTorneoById = async (id) => {
    try {
        return await torneoRepository.getTorneoById(id);
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllTorneos,
    getAllTorneosWithFilters,
    getTorneoById,
};