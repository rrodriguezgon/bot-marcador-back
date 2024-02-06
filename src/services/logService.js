const logRepository = require('../repositories/logRepository');

const getAllLogs = async () => {
    try {
        return await logRepository.getAllLogs();
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllLogs,
};