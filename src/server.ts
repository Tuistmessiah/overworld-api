import express, {
  Application,
  Response,
  Request,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config";
import exampleRouter from "./api/example-router";

const app: Application = express();
const PORT = config.PORT || 5000;

// CORS
if (config.CORS_OFF) {
  app.use(cors());
} else {
  app.use(cors({ origin: config.CORS_ORIGIN, credentials: true }));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Certificate
app.all("*", (req, res, next) => {
  if (config.AUTH_OFF === "true" && req.get("basicToken") !== config.API_TOKEN) {
    return res
      .status(505)
      .json({ error: `No correct authentication: Include as header 'basicToken'` });
  }
  next();
  return;
});

// Routing
app.use("/example", exampleRouter);

// Error Handler
const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({ error: err.message });
};
app.use(errorHandler);

// Default endpoint
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Connected to API" });
});

app.listen(PORT, function () {
  console.info(`Express server listening on port ${PORT}`);
});
