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

module.exports = {
    registerUser,
    loginUser,
};