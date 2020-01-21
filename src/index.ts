import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createConnection } from "typeorm";
import routes from "./routes";

// Connectes to the database -> then start the express app
createConnection()
  .then(async (connection) => {
    // Create a new express application instance
    const app = express();

    // Call middlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    // Set all routes from routes folder
    // @ts-ignore
    app.use("/", routes);
    app.listen(3000, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(err);
    // tslint:disable-next-line:no-console
    console.log("Could not connect to the database.");
  });

// define a route handler for the default home page
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello world!" });
// });
