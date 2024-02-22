const comandoRepository = require('../repositories/comandoRepository');

const getAllComandos = async () => {
    try {
        return await comandoRepository.getAllComandos();
    } catch(err){
        throw err;
    }
};

const getAllComandosWithFilters = async (filters) => {
    try {
        return await comandoRepository.getAllComandosWithFilters(filters);
    } catch(err){
        throw err;
    }
};

const getComandoById = async (id) => {
    try {
        return await comandoRepository.getComandoById(id);
    } catch(err){
        throw err;
    }
};

const createComando = async (comando) => {
    try {
        return await comandoRepository.createComando(comando);
    } catch(err){
        throw err;
    }
};

const updateComando = async (id, comando) => {
    try {
        return await comandoRepository.updateComando(id, comando);
    } catch(err){
        throw err;
    }
};

const deleteComando = async (id) => {
    try {
        return await comandoRepository.deleteComando(id);
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllComandos,
    getAllComandosWithFilters,
    getComandoById,
    createComando,
    updateComando,
    deleteComando,
  };