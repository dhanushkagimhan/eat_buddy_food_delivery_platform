import { Op } from 'sequelize'
import { user } from '../models'
import { UserInput, UserOutput } from '../../common/interfaces'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const userRes = await user.create(payload) as unknown as UserOutput
    return userRes
}

export const getByEmail = async (userEmail: string): Promise<UserOutput> => {
    const userRes = await user.findOne({ where: { email: userEmail } }) as unknown as UserOutput;
    return userRes
}