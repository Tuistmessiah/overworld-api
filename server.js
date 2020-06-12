const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config.js");
const exampleRouter = require("./api/example-router");

const app = express();
const PORT = config.PORT || 5000;

// CORS
if (config.CORS_OFF) {
  app.use(cors());
} else {
  app.use(cors({ origin: config.CORS_ORIGIN, credentials: true }));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use("/example", exampleRouter);

// Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message,
  });
});

// Default endpoint
app.get("/", (req, res) => {
  res.send({ message: "Connected to API" });
});

app.listen(PORT, function () {
  console.info(`Express server listening on port ${PORT}`);
});
