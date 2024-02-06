const express = require("express");
const app = express();
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.json");
const mongoConnect = require("./config/mongo");
require("dotenv").config();

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", routes);

app.listen(process.env.port | 3000, () => {
    console.log("Example app listening on port 3000!");
    mongoConnect();
});
