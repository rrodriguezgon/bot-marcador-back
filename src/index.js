const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.json");
const mongoConnect = require("./config/mongo");
require("dotenv").config();

const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", routes);



app.listen(process.env.port | 4000, () => {
    console.log("Example app listening on port 4000!");
    mongoConnect();
});
