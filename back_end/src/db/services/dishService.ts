import { DishInput, DishOutput } from '../../common/interfaces'
import * as dishDal from '../dal/dish'

export const create = async (payload: DishInput): Promise<DishOutput> => {
    const newDish = dishDal.create(payload)
    return newDish;
}