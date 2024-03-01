require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Carga el logger de Morgan
const bodyParser = require("body-parser");
const routes = require("./routes/index");

// Config swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.json");
const swaggerDocs = swaggerJsDoc(swaggerConfig);

// Config mongo
const mongoConnect = require("./config/mongo");

const app = express();

app
  .use(cors())
  .use(morgan("dev")) // Carga el middleware de Morgan
  .use(bodyParser.json()) // to support JSON-encoded bodies
  .use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    })
  )
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)) // ruta swagger
  .use("/", routes); // enrutamientos

// inicialización
app.listen(process.env.port | 4000, () => {
  console.log("Example app listening on port 4000!");
  mongoConnect();
});
