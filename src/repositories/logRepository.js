const Log = require("../models/logs");
const moment = require("moment");

const getAllLogs = async () => {
  try {
    return await Log.find().sort("-date");
  } catch (err) {
    throw err;
  }
};

const getAllLogsWithFilters = async (filtersParams) => {
  try {
    let filters = {};
    let sort = "-date";
    if (filtersParams.type) {
      Object.assign(filters, { type: filtersParams.type });
    }

    if (filtersParams.comando) {
      Object.assign(filters, { nameCommand: filtersParams.comando });
    }

    if (filtersParams.date) {
      const today = moment(filtersParams.date).format('LL');
      const tomorrow = moment(filtersParams.date).add('day', 1).format('LL');
      Object.assign(filters, {
        date: {
          $gte: today,
          $lt: tomorrow,
        },
      });
    }

    if (filtersParams.orden && filtersParams.orden === "desc") {
      sort = "date";
    }

    return await Log.find(filters).sort(sort);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllLogs,
  getAllLogsWithFilters,
};
