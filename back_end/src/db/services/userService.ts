import * as userDal from '../dal/user'
import { UserInput, UserOutput } from '../../common/interfaces'

export const register = async (payload: UserInput): Promise<UserOutput> => {
    return await userDal.create(payload);
}

export const login = async (payload: UserInput): Promise<UserOutput> => {
    const email: string = payload.email as string;
    return await userDal.getByEmail(email)
}