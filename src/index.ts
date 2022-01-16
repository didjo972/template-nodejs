import { createConnection } from "typeorm";
import Server from "./server";

// Connectes to the database -> then start the express app
createConnection()
  .then(async (connection) => {
    Server.runServe(3000);
  })
  .catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(err);
    // tslint:disable-next-line:no-console
    console.log("Could not connect to the database.");
  });
