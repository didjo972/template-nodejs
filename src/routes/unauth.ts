import { Router } from "express";
import UnauthController from "../controllers/UnauthController";

/**
 * @swagger
 * tags:
 *   name: Unauth
 *   description: API available to unauthorized user.
 */
const router = Router();

/**
 * @swagger
 * path:
 * /public:
 *    get:
 *      summary: Hello world
 *      tags: [Unauth]
 *      responses:
 *        "200":
 *          description: Hello world
 */
// Get hello world
router.get("/", UnauthController.helloWorld);

/**
 * @swagger
 * path:
 * /public/ping:
 *    get:
 *      summary: Ping
 *      tags: [Unauth]
 *      responses:
 *        "200":
 *          description: Ping
 */
// Ping
router.get("/ping", UnauthController.ping);

/**
 * @swagger
 * path:
 * /public/createAccount:
 *    post:
 *      summary: Create a new account
 *      tags: [Unauth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *
 *      responses:
 *        "200":
 *          description: The created account
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 */
// Create an account
router.post("/createAccount", UnauthController.newUser);

export default router;
