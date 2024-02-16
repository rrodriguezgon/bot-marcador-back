const logRepository = require('../repositories/logRepository');

const getAllLogs = async () => {
    try {
        return await logRepository.getAllLogs();
    } catch(err){
        throw err;
    }
};

const getAllLogsWithFilters = async (filters) => {
    try {
        return await logRepository.getAllLogsWithFilters(filters);
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllLogs,
    getAllLogsWithFilters,
};