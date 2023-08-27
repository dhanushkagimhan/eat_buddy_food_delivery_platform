import { DishCategoryCreationInput, DishCategoryCreationRequest, DishCategoryOutput, ResturantOutput } from '../../common/interfaces';
import * as resturantDishCategoryDal from '../dal/dishCategory';

export const createDishCategory = async (payload: DishCategoryCreationRequest): Promise<DishCategoryOutput> => {
    const dalPayload: DishCategoryCreationInput = {
        name: payload.name,
        ResturantDishCategories: [{
            resturant_id: payload.resturant_id
        }]
    }

    return resturantDishCategoryDal.createDishCategory(dalPayload)
}

export const getDishCategoriesByResturantId = async (resturantId: number): Promise<ResturantOutput | null> => {
    return resturantDishCategoryDal.getDishCategoriesByResturantId(resturantId);
}