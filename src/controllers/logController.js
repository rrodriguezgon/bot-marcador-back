const logService = require('../services/logService');

const getAllLogs = async (req, res, next) => {
    try {
        const logs = await logService.getAllLogs();
        res.status(200).json(logs);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const getAllLogsWithFilters = async (req, res, next) => {
    try {
        const logs = await logService.getAllLogsWithFilters(req.body);
        res.status(200).json(logs);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

module.exports = {
    getAllLogs,
    getAllLogsWithFilters,
};