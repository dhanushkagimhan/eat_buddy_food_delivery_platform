import * as service from '../../../db/services/userService'
import { RefreshTokenInput, RefreshTokenOutput, RefreshTokenResponse, UserInput, UserOutput, UserResponse } from '../../../common/interfaces'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import { toUser } from './mapper';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '../../middleware/auth';
import * as refreshTokenService from '../../../db/services/refreshTokenService'

export const register = async (req: Request, res: Response): Promise<Response> => {
    const payload: UserInput = req.body;
    try {
        const existUser = await service.getByEmail(payload.email as string) //@Todo need to add request body validation
        if (existUser) {
            res.status(409).send({ message: "Email is already registered" })
        }

        const saltRound = 8
        const hashPassword: string = await bcrypt.hash(payload.password, saltRound)
        payload.password = hashPassword;
        console.log('payload with hashpassword ', payload)
        const newUser: UserOutput = await service.register(payload);

        const newAccessAndRefreshTokenResponse: RefreshTokenOutput = await createAccessAndRefreshToken(newUser.id, newUser.email)
        const userRes: UserResponse = toUser(newUser, newAccessAndRefreshTokenResponse)
        return res.status(201).send(userRes)
    }
    catch (error) {
        console.log(`Error occured when registering : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const login = async (req: Request, res: Response): Promise<Response> => {
    const payload: UserInput = req.body;
    try {
        const foundUser: UserOutput | null = await service.getByEmail(payload.email as string) //@Todo need to add request body validation

        if (!foundUser) {
            return res.status(404).send({ message: 'Email is not found' })
        }

        const isMatch: boolean = bcrypt.compareSync(payload.password, foundUser.password)

        if (isMatch) {
            const newAccessAndRefreshTokenResponse: RefreshTokenOutput = await createAccessAndRefreshToken(foundUser.id, foundUser.email)
            const userRes: UserResponse = toUser(foundUser, newAccessAndRefreshTokenResponse)
            return res.status(200).send(userRes)
        } else {
            return res.status(401).send({ message: 'Password is wrong' });
        }
    } catch (error) {
        console.log(`Error occured when login : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const authRefreshToken = async (req: Request, res: Response): Promise<Response> => {
    try {
        const refreshToken: string = req.body.refresh_token;

        if (!refreshToken) {
            throw new Error('request not include the refresh token')
        }

        const decoded: JwtPayload = jwt.verify(refreshToken, SECRET_KEY) as JwtPayload;

        const refreshTokenEntry: RefreshTokenOutput = await refreshTokenService.findByRefreshToken(refreshToken)

        if (!refreshTokenEntry.is_valid) {
            await refreshTokenService.findByUserIdAndUpdateValidity(refreshTokenEntry.user_id, false);
            throw new Error("Try to get new access token with old refresh token")
        }

        const newRefreshToken: RefreshTokenOutput = await createAccessAndRefreshToken(refreshTokenEntry.user_id, decoded.email)

        if (!newRefreshToken) {
            throw new Error('Error when creating the new refresh token')
        }

        const newTokensResponse: RefreshTokenResponse = {
            access_token: newRefreshToken.access_token,
            refresh_token: newRefreshToken.refresh_token
        }

        return res.status(200).send(newTokensResponse)

    } catch (error) {
        console.log(`Error occured when refreshing the access token : ${error}`)
        return res.status(403).send({ message: 'Could not refresh the access token' })
    }

}

export const getUserByRefreshToken = async (req: Request, res: Response): Promise<Response> => {
    try {
        const refreshToken: string = req.body.refresh_token;

        if (!refreshToken) {
            throw new Error('request not include the refresh token')
        }

        const decoded: JwtPayload = jwt.verify(refreshToken, SECRET_KEY) as JwtPayload;

        const user: UserOutput = await service.getById(decoded._id)

        return res.status(200).send(toUser(user))

    } catch (error) {
        console.log(`Error occured when getUserByRefreshToken : ${error}`)
        return res.status(403).send({ message: 'Invalid refresh_token' })
    }

}

const createAccessAndRefreshToken = async (userId: number, userEmail: string): Promise<RefreshTokenOutput> => {
    const accessToken: string = jwt.sign({ _id: userId.toString(), email: userEmail }, SECRET_KEY, { expiresIn: '5m' });
    const refreshToken: string = jwt.sign({ _id: userId.toString(), email: userEmail }, SECRET_KEY, { expiresIn: '1h' });

    await refreshTokenService.findByUserIdAndUpdateValidity(userId, false);

    const payload: RefreshTokenInput = {
        refresh_token: refreshToken,
        access_token: accessToken,
        is_valid: true,
        user_id: userId
    }

    return await refreshTokenService.create(payload)
}
