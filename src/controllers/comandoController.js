const comandoService = require('../services/comandoService');

const getAllComandos = async (req, res, next) => {
    try {
        const logs = await comandoService.getAllComandos();
        res.status(200).json(logs);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

module.exports = {
    getAllComandos,
};