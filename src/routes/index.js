const { Router } = require("express");
const router = Router();
const torneoRoutes = require("./torneo.routes");
const logRoutes = require("./log.routes");
const comandoRoutes = require("./comando.routes");
const userRoutes = require("./user.routes");


router.use("/api/v1/torneos", torneoRoutes);
router.use("/api/v1/logs", logRoutes);
router.use("/api/v1/comandos", comandoRoutes);
router.use("/api/v1/user", userRoutes);

module.exports = router;
 