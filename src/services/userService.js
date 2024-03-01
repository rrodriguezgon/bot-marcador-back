const userRepository = require('../repositories/userRepository');

const registerUser = async (username, password) => {
    try {
        return await userRepository.registerUser(username, password);
    } catch(err){
        throw err;
    }
};

const loginUser = async (username, password) => {
    try {
        return await userRepository.loginUser(username, password);
    } catch(err){
        throw err;
    }
};

const validUser = async (username) => {
    try {
        return await userRepository.validUser(username);
    } catch(err){
        throw err;
    }
};

module.exports = {
    registerUser,
    loginUser,
    validUser,
};