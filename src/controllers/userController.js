const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;
    await userService.registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

async function loginUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userService.loginUser(username, password);
      if (user){
        console.log(process.env.token);
        const token = jwt.sign({ userId: user._id }, process.env.token, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(503).json({ error: 'Authentication failed' });
      }
      
    } catch (error) {
      console.log(error)
      res.status(503).json({ error: 'Authentication failed' });
    }
  };

  module.exports = {
    registerUser,
    loginUser,
  };
