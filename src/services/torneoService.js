const torneoRepository = require('../repositories/torneoRepository');

const getAllTorneos = async () => {
    try {
        return await torneoRepository.getAllTorneos();
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllTorneos,
};