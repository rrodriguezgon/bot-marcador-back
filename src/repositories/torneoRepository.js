const Torneo = require("../models/torneos");

const getAllTorneos = async () => {
  try {
    return await Torneo.find();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllTorneos,
};
