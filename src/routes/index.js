const { Router } = require("express");
const router = Router();
const torneoRoutes = require("./torneo.routes");
const logRoutes = require("./log.routes");
const comandoRoutes = require("./comando.routes");
const userRoutes = require("./user.routes");

// middlewares
const authenticateToken = require('../middleware/authenticateToken');

router.use("/api/v1/torneos", authenticateToken, torneoRoutes);
router.use("/api/v1/logs", authenticateToken, logRoutes);
router.use("/api/v1/comandos", authenticateToken, comandoRoutes);
router.use("/api/v1/user", userRoutes);

module.exports = router;
 