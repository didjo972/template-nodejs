import express, {Request, Response} from "express";
export const app = express();

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});
