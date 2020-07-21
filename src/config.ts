import dotenv from "dotenv-flow";
dotenv.config();

export default {
  AUTH_OFF: process.env.AUTH_OFF,
  CORS_OFF: process.env.CORS_OFF,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  API_PASSWORD: process.env.API_PASSWORD,
  API_TOKEN: process.env.API_TOKEN,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: 5000,
};
