const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
const conectarDb = require("./config/db");
require("dotenv").config();
const app = express();

//connect to BD
conectarDb();
//Swagger doc
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API Starwars to list Ships",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4001",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);
app.use(express.json());
// Config of CORS
// const whitelist = [process.env.FRONTEND_URL];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin)) {
//       // can access to API
//       callback(null, true);
//     } else {
//       // forbidden
//       callback(new Error("Error de Cors"));
//     }
//   },
// };

// app.use(cors(corsOptions));

//app routes
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
