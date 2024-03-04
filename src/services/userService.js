const userRepository = require("../repositories/userRepository");

const registerUser = async (username, password) => {
  return await userRepository.registerUser(username, password).catch((err) => {
    throw err;
  });
};

const loginUser = async (username, password) => {
  return await userRepository.loginUser(username, password).catch((err) => {
    throw err;
  });
};

const validUser = async (username) => {
  return await userRepository.validUser(username).catch((err) => {
    throw err;
  });
};

module.exports = {
  registerUser,
  loginUser,
  validUser,
};
