import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt, checkRole } from "../middlewares/jwt";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage your users.
 */
const router = Router();

/**
 * @swagger
 * path:
 * /users:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      security:
 *        - jwt: []
 *      responses:
 *        "200":
 *          description: All the users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/User"
 */
// Get all users
router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

/**
 * @swagger
 * path:
 * /users/{id}:
 *    get:
 *      summary: Get a user by id
 *      tags: [Users]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user id
 *      responses:
 *        "200":
 *          description: A user
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/User"
 *        "404":
 *          description: User not found.
 */
// Get one user
router.get(
    "/:id([0-9]+)",
    [checkJwt],
    UserController.getOneById
  );

/**
 * @swagger
 * path:
 * /users/{id}:
 *    patch:
 *      summary: Edit a user
 *      tags: [Users]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "204":
 *          description: Update was successful
 *        "404":
 *          description: User not found.
 */
// Edit one user
router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );

/**
 * @swagger
 * path:
 * /users/{id}:
 *    delete:
 *      summary: Delete a user by id
 *      tags: [Users]
 *      security:
 *        - jwt: []
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: The user id
 *      responses:
 *        "204":
 *          description: Delete was successful
 *        "404":
 *          description: User not found.
 */
// Delete one user
router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.deleteUser
  );

export default router;
