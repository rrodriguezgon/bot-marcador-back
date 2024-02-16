const comandoService = require('../services/comandoService');

const getAllComandos = async (req, res, next) => {
    try {
        const comandos = await comandoService.getAllComandos();
        res.status(200).json(comandos);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const getComandoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comando = await comandoService.getComandoById(id);
        res.status(200).json(comando);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const createComando = async (req, res, next) => {
    try {
        const { body } = req;
        const comando = await comandoService.createComando(body);
        res.status(200).json(comando);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const updateComando = async (req, res, next) => {
    try {
        const { body, params } = req;
        const { id } = params;
        const comando = await comandoService.updateComando(id, body);
        res.status(200).json(comando);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const deleteComando = async (req, res, next) => {
    try {
        const { id } = req.params;
        const comando = await comandoService.deleteComando(id);
        res.status(200).json(comando);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

module.exports = {
    getAllComandos,
    getComandoById,
    createComando,
    updateComando,
    deleteComando,
  };