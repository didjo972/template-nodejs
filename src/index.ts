import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { createConnection } from "typeorm";
import swaggerconfig from "./../swaggerconfig.json";
import routes from "./routes";
import Server from "./server";

// Options for swagger
const options = swaggerconfig;

const specs = swaggerJsDoc(options);

// Create a new express application instance
export const app = express();

// Connectes to the database -> then start the express app
createConnection()
  .then(async (connection) => {
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
    Server.runServe(3000);
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(err);
    // tslint:disable-next-line:no-console
    console.log("Could not connect to the database.");
  });
