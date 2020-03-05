import { Router } from "express";
import UnauthController from "../controllers/UnauthController";

const router = Router();

// Get hello world
router.get("/", UnauthController.helloWorld);

// Create an account
router.post("/createAccount", UnauthController.newUser);

export default router;
