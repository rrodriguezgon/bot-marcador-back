const { Router } = require("express");
const router = Router();
const torneoRoutes = require("./torneo.routes");
const logRoutes = require("./log.routes");
const comandoRoutes = require("./comando.routes");
const userRoutes = require("./user.routes");

// middlewares
const authenticateToken = require('../middleware/authenticateToken');
const limiter = require('../middleware/rateLimit');

router.use("/api/v1/torneos", limiter, authenticateToken, torneoRoutes);
router.use("/api/v1/logs",limiter, authenticateToken, logRoutes);
router.use("/api/v1/comandos", limiter, authenticateToken, comandoRoutes);
router.use("/api/v1/user", limiter, userRoutes);

module.exports = router;
 