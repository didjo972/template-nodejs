import dotenv from "dotenv";
// start the Express server
import { app } from "./app";
const defaultPort = 7000; // default port to listen

class Server {
    public static runServe = (port: number = defaultPort) => {
        dotenv.config();
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server started at http://localhost:${port}`);
        });
    }
}

export default Server;
