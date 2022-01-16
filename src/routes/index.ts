import { Router } from "express";
import auth from "./auth";
import error from "./error";
import unauth from "./unauth";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/public", unauth);
routes.use("/", error);

export default routes;
