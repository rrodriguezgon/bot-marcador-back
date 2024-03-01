require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Carga el logger de Morgan
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');
const routes = require("./routes/index");

// Config swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.json");
const swaggerDocs = swaggerJsDoc(swaggerConfig);

// Config mongo
const mongoConnect = require("./config/mongo");

const app = express();

const limiter = rateLimit({
	windowMs: (process.env.rateMinuts | 1) * 60 * 1000, // 15 minutes
	limit: (process.env.rateLimit | 5), // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

app
  .use(limiter) // Apply the rate limiting middleware to all requests.
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
