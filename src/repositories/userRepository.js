const User = require("../models/user");

const registerUser = async (username, password) => {
  try {
    const user = new User({ username, password });
    return await user.save();
  } catch (ex) {
    throw ex;
  }
};

const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error("Authentication failed");
      error.code = 401;

      throw error;
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      const error = new Error("Authentication failed");
      error.code = 401;

      throw error;
    }
    return user;
  } catch (ex) {
    ex.code = 500;
    throw ex;
  }
};

const validUser = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error("Authentication failed");
      error.code = 401;

      throw error;
    }
    return user;
  } catch (ex) {
    ex.code = 500;
    throw ex;
  }
};

module.exports = {
  registerUser,
  loginUser,
  validUser,
};
