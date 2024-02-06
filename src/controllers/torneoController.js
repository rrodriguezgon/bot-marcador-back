const torneoService = require('../services/torneoService');

const getAllTorneos = async (req, res, next) => {
    try {
        const torneos = await torneoService.getAllTorneos();
        res.status(200).json(torneos);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

module.exports = {
    getAllTorneos,
};