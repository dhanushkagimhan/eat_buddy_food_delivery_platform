import { DishCategoryCreationInputWithResturantId, DishCategoryCreationRequestWithResturant, DishCategoryOutput, ResturantOutput } from '../../common/interfaces';
import * as resturantDishCategoryDal from '../dal/resturantDishCategory';

export const createDishCategoryWithResturantId = async (payload: DishCategoryCreationRequestWithResturant): Promise<DishCategoryOutput> => {
    const dalPayload: DishCategoryCreationInputWithResturantId = {
        name: payload.name,
        ResturantDishCategories: [{
            resturant_id: payload.resturant_id
        }]
    }

    return resturantDishCategoryDal.createDishCategoryWithResturantId(dalPayload)
}

export const getResturantDishCategories = async (resturantId: number): Promise<ResturantOutput | null> => {
    return resturantDishCategoryDal.getDishCategoriesWithResturantId(resturantId);
}