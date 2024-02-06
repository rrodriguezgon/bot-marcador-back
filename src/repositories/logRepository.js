const Log = require("../models/logs");

const getAllLogs = async () => {
  try {
    return await Log.find();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllLogs,
};
