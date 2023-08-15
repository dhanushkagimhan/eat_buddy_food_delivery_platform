import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import * as refreshTokenService from '../../db/services/refreshTokenService'
import { RefreshTokenOutput } from '../../common/interfaces';

export const SECRET_KEY: Secret = process.env.AUTH_SECRET_KEY ?? "secret_key";

// export interface CustomRequest extends Request {
//     token: string | JwtPayload;
// }

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.header('Authorization')?.replace('Bearer ', '');

        if (!accessToken) {
            throw new Error();
        }

        jwt.verify(accessToken, SECRET_KEY);

        // console.log('eeeeeeeeeeeeeeeeeee ', decoded)
        // (req as CustomRequest).token = decoded;

        const refreshTokenEntry: RefreshTokenOutput = await refreshTokenService.findByAccessToken(accessToken);
        if (!refreshTokenEntry.is_valid) {
            throw new Error();
        }

        next();
    } catch (err) {
        console.log('Access token auth error : ', err)
        res.status(401).send({ message: 'Please authenticate' });
    }
};