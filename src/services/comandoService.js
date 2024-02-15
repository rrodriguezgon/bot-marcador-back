const comandoRepository = require('../repositories/comandoRepository');

const getAllComandos = async () => {
    try {
        return await comandoRepository.getAllComandos();
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllComandos,
};