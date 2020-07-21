import dotenv from "dotenv-flow";
dotenv.config();
import { Pool, QueryResult } from "pg";
const config = require("../../config.ts");

if (!config) {
  throw new Error("No database configuration found.");
}

const pool = new Pool({
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
});

export default pool;
