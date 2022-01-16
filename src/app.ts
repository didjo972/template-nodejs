import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerconfig from "./../swaggerconfig.json";
import routes from "./routes";

// Options for swagger
const options = swaggerconfig;

const specs = swaggerJsDoc(options);

// Create a new express application instance
export const app = express();

// Call middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true })
);

// Set all routes from routes folder
// @ts-ignore
app.use("/", routes);
