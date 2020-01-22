import {Request, Response} from "express";

class UnauthController {

    public static helloWorld = (req: Request, res: Response) => {
        res.json({message: "Hello World !"});
    }

}

export default UnauthController;
