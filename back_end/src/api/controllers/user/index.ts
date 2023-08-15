import * as service from '../../../db/services/userService'
import { RefreshTokenInput, RefreshTokenOutput, UserInput, UserOutput, UserResponse } from '../../../common/interfaces'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import { toUser } from './mapper';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../middleware/auth';
import * as refreshTokenService from '../../../db/services/refreshTokenService'

export const register = async (req: Request, res: Response) => {
    const payload: UserInput = req.body;
    try {
        const saltRound = 8
        const hashPassword: string = await bcrypt.hash(payload.password, saltRound)
        payload.password = hashPassword;
        console.log('payload with hashpassword ', payload)
        const newUser: UserOutput = await service.register(payload);

        const newAccessAndRefreshTokenResponse: RefreshTokenOutput = await createAccessAndRefreshToken(newUser.id, newUser.email)
        const userRes: UserResponse = toUser(newUser, newAccessAndRefreshTokenResponse.access_token, newAccessAndRefreshTokenResponse.refresh_token)
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
            const newAccessAndRefreshTokenResponse: RefreshTokenOutput = await createAccessAndRefreshToken(foundUser.id, foundUser.email)
            const userRes: UserResponse = toUser(foundUser, newAccessAndRefreshTokenResponse.access_token, newAccessAndRefreshTokenResponse.refresh_token)
            return res.status(200).send(userRes)
        } else {
            return res.status(401).send({ message: 'Password is wrong' });
        }
    } catch (error) {
        console.log(`Error occured when login : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

const createAccessAndRefreshToken = async (userId: number, userEmail: string): Promise<RefreshTokenOutput> => {
    const accessToken: string = jwt.sign({ _id: userId.toString(), email: userEmail }, SECRET_KEY, { expiresIn: '5m' });
    const refreshToken: string = jwt.sign({ _id: userId.toString(), email: userEmail }, SECRET_KEY, { expiresIn: '1h' });

    const payload: RefreshTokenInput = {
        refresh_token: refreshToken,
        access_token: accessToken,
        is_valid: true,
        user_id: userId
    }

    return await refreshTokenService.create(payload)
}
