import * as refreshTokenDal from '../dal/refreshToken'
import { RefreshTokenInput, RefreshTokenOutput } from "../../common/interfaces"

export const create = async (payload: RefreshTokenInput): Promise<RefreshTokenOutput> => {
    return refreshTokenDal.create(payload);
}

export const findByRefreshToken = async (refreshToken: string): Promise<RefreshTokenOutput> => {
    return refreshTokenDal.findByRefreshToken(refreshToken);
}

export const findByAccessToken = async (accessToken: string): Promise<RefreshTokenOutput> => {
    return refreshTokenDal.findByAccessToken(accessToken);
}

export const findByUserIdAndUpdateValidity = async (userId: number, validity: boolean): Promise<number> => {
    return refreshTokenDal.findByUserIdAndUpdateValidity(userId, validity)
}
