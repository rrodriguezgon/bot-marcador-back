const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/refresh", userController.refresh);

// Protected route example
router.get('/protected', authenticateToken, (req, res) => {
    // Your protected route logic here
    res.json({ message: 'This is a protected route' });
  });
  
module.exports = router;