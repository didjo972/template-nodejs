import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createConnection } from "typeorm";
import routes from "./routes";
import Server from "./server";

// Create a new express application instance
export const app = express();

// Call middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Set all routes from routes folder
// @ts-ignore
app.use("/", routes);
Server.runServe(3000);

// Connectes to the database -> then start the express app
// createConnection()
//   .then(async (connection) => {
//     // Call middlewares
//     app.use(cors());
//     app.use(helmet());
//     app.use(bodyParser.json());
//
//     // Set all routes from routes folder
//     // @ts-ignore
//     app.use("/", routes);
//     Server.runServe(3000);
//   })
//   .catch((err) => {
//     // tslint:disable-next-line:no-console
//     console.error(err);
//     // tslint:disable-next-line:no-console
//     console.log("Could not connect to the database.");
//   });

// define a route handler for the default home page
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello world!" });
// });
