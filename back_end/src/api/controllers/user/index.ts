import * as service from '../../../db/services/userService'
import { UserInput, UserOutput, UserResponse } from '../../../common/interfaces'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response): Promise<Response> => {
    const payload: UserInput = req.body;
    try {
        console.log('payload ', payload)
        const newUser: UserOutput = await service.register(payload);

        const userRes: UserResponse = {
            ...newUser,
            token: 'this is token'
        }

        return res.status(201).send(userRes)
    }
    catch (error) {
        console.log(`Error occured when registering : ${error}`)
        return res.status(500).send('system Error');
    }
}

export const login = async (req: Request, res: Response): Promise<Response> => {
    const payload: UserInput = req.body;
    try {
        const foundUser: UserOutput = await service.login(payload)

        if (foundUser == null) {
            return res.status(404).send('Email is not found')
        }

        const isMatch: boolean = bcrypt.compareSync(payload.password, foundUser.password)

        if (isMatch) {
            const userRes: UserResponse = {
                ...foundUser,
                token: 'this is token'
            }
            return res.status(200).send(userRes)
        } else {
            return res.status(401).send('Password is wrong');
        }
    } catch (error) {
        console.log(`Error occured when login : ${error}`)
        return res.status(500).send('system Error');
    }

}
