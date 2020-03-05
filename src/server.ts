// start the Express server
import { app } from "./index";
const defaultPort = 7000; // default port to listen

class Server {
    public static runServe = (port: number = defaultPort) => {
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server started at http://localhost:${port}`);
        });
    }
}

export default Server;
