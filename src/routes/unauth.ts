import {Router} from "express";
import UnauthController from "../controllers/UnauthController";

const router = Router();

// Get hello world
router.get("/", UnauthController.helloWorld);

export default router;
