import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { ICreateUserRequest } from "../shared/interfaces";

class UnauthController {

    public static helloWorld = (req: Request, res: Response) => {
        res.json({message: "Hello World !"});
    }

    public static newUser = async (req: Request, res: Response) => {
        // Get parameters from the body
        const { username, password, email }: ICreateUserRequest = req.body;
        const user = new User();
        user.username = username;
        user.password = password;
        user.email = email;
        user.role = "USER";

        // Validade if the parameters are ok
        const errors = await validate(user);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        // Hash the password, to securely store on DB
        user.hashPassword();

        // Try to save. If fails, the username is already in use
        const userRepository = getRepository(User);
        try {
            await userRepository.save(user);
        } catch (e) {
            res.status(409).send("username already in use");
            return;
        }

        // If all ok, send 201 response
        res.status(201).send("User created");
    }

}

export default UnauthController;
