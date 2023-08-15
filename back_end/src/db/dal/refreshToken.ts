import { RefreshTokenInput, RefreshTokenOutput } from "../../common/interfaces"
import { RefreshToken } from "../models"

export const create = async (payload: RefreshTokenInput): Promise<RefreshTokenOutput> => {
    const refreshTokenRes = await RefreshToken.create(payload) as unknown as RefreshTokenOutput
    return refreshTokenRes
}

export const findByRefreshToken = async (refreshToken: string): Promise<RefreshTokenOutput> => {
    const refreshTokenRes = await RefreshToken.findOne({ where: { refresh_token: refreshToken } }) as unknown as RefreshTokenOutput
    return refreshTokenRes
}

export const findByAccessToken = async (accessToken: string): Promise<RefreshTokenOutput> => {
    const refreshTokenRes = await RefreshToken.findOne({ where: { access_token: accessToken } }) as unknown as RefreshTokenOutput
    return refreshTokenRes
}

export const findByUserIdAndUpdateValidity = async (userId: number, validity: boolean): Promise<number> => {
    const affectedCount = await RefreshToken.update({ is_valid: validity }, { where: { user_id: userId } })
    console.log('RefreshToken - findByUserIdAndUpdateValidity : ', affectedCount)
    return affectedCount[0]
}
