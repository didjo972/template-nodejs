import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";
import { MailError } from "../shared/errors/MailError";
import { ICreateUserRequest, IResetPasswordRequest } from "../shared/interfaces";
import { mailService } from "../shared/mail";

class UnauthController {

    public static helloWorld = (req: Request, res: Response) => {
        res.json({message: "Hello World !"});
    }

    public static ping = (req: Request, res: Response) => {
        res.json({isAlive: true});
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

        // Create the refresh secret
        user.createOrUpdateRefreshSecret();

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

    public static resetPassword = async (req: Request, res: Response) => {
        const { email }: IResetPasswordRequest = req.body;
        if (!email) {
            res.status(400).send("Email is missing");
            return;
        }

        // Get the user by email
        const userRepository = getRepository(User);
        try {
            const userFound = await userRepository.createQueryBuilder("user")
                .where("user.email = :email", { email })
                .getOne();

            // Send an email with an URL to reset the password
            mailService.sendResetPasswordMail(userFound.email);
            res.status(200).send();
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
            if (e instanceof MailError) {
                res.status(500).send("Internal Server Error");
            } else {
                res.status(400).send("This email doesn't exist");
            }
        }
        return;
    }

}

export default UnauthController;
