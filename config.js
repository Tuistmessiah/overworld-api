const dotenv = require("dotenv-flow");
dotenv.config();

module.exports = {
  AUTH_OFF: process.env.AUTH_OFF,
  CORS_OFF: process.env.CORS_OFF,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  API_PASSWORD: process.env.API_PASSWORD,
  API_TOKEN: process.env.API_TOKEN,
};

function corsOrigin() {}
