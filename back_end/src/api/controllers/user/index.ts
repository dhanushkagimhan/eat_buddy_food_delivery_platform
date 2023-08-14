import * as service from '../../../db/services/userService'
import { UserInput, UserOutput, UserResponse } from '../../../common/interfaces'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import { toUser } from './mapper';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../middleware/auth';

export const register = async (req: Request, res: Response) => {
    const payload: UserInput = req.body;
    try {
        const saltRound = 8
        const hashPassword: string = await bcrypt.hash(payload.password, saltRound)
        payload.password = hashPassword;
        console.log('payload with hashpassword ', payload)
        const newUser: UserOutput = await service.register(payload);

        const token: string = jwt.sign({ _id: newUser.id?.toString(), email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });
        const userRes: UserResponse = toUser(newUser, token)
        return res.status(201).send(userRes)
    }
    catch (error) {
        console.log(`Error occured when registering : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const login = async (req: Request, res: Response) => {
    const payload: UserInput = req.body;
    try {
        const foundUser: UserOutput = await service.login(payload)

        if (!foundUser) {
            return res.status(404).send({ message: 'Email is not found' })
        }

        const isMatch: boolean = bcrypt.compareSync(payload.password, foundUser.password)

        if (isMatch) {
            const token: string = jwt.sign({ _id: foundUser.id?.toString(), email: foundUser.email }, SECRET_KEY, { expiresIn: '1h' });
            const userRes: UserResponse = toUser(foundUser, token)
            return res.status(200).send(userRes)
        } else {
            return res.status(401).send({ message: 'Password is wrong' });
        }
    } catch (error) {
        console.log(`Error occured when login : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }

}
