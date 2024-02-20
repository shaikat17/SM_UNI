import { TUser } from './user.interface';
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
    const { password, userData: TUser } = req.body
    console.log(req.body)

    res.json({
        success: true,
    })
}

export const userControllers = {
    createUser,
}