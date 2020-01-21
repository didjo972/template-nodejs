import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import * as Routes from "./routes";

// Connectes to the database -> then start the express app
createConnection()
    .then(async connection => {
      // Create a new express application instance
        const app = express();

        // Call middlewares
        app.use(cors());
        app.use(helmet());
        app.use(bodyParser.json());

        //Set all routes from routes folder
        // @ts-ignore
            app.use("/", Routes);
    })
    .catch(err => console.error(err));

// define a route handler for the default home page
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello world!" });
// });
