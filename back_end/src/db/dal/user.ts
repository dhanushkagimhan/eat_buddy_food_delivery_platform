import { User } from '../models'
import { UserInput, UserOutput } from '../../common/interfaces'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const userRes = await User.create(payload);
    return userRes
}

export const getByEmail = async (userEmail: string): Promise<UserOutput | null> => {
    const userRes = await User.findOne({ where: { email: userEmail } });
    return userRes
}

export const getById = async (id: number): Promise<UserOutput> => {
    const userRes = await User.findByPk(id);
    if (!userRes) {
        throw new Error('User is not found')
    }
    return userRes
}