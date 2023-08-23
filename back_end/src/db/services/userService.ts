import * as userDal from '../dal/user'
import { UserInput, UserOutput } from '../../common/interfaces'

export const register = async (payload: UserInput): Promise<UserOutput> => {
    return await userDal.create(payload);
}

export const getByEmail = async (email: string): Promise<UserOutput | null> => {
    return await userDal.getByEmail(email)
}

export const getById = async (id: number): Promise<UserOutput> => {
    return userDal.getById(id)
}