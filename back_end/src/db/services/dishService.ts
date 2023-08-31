import { DishCategoryOutput, DishInput, DishOutput } from '../../common/interfaces'
import * as dishDal from '../dal/dish'

export const create = async (payload: DishInput): Promise<DishOutput> => {
    return dishDal.create(payload)
}

export const getResturantCategorizedDishes = (resturantId: number): Promise<DishCategoryOutput[]> => {
    return dishDal.getResturantCategorizedDishes(resturantId)
}