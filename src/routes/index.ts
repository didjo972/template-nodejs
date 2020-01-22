import { Router } from "express";
import auth from "./auth";
import unauth from "./unauth";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/public", unauth);

export default routes;
