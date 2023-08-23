import { DishCategoryCreationInputWithResturantId, DishCategoryCreationRequestWithResturant, DishCategoryInterface, DishCategoryOutput, ResturantDishCategoryInput, ResturantDishCategoryOutput } from '../../common/interfaces';
import { sequelizeConnection } from '../config';
import * as resturantDishCategoryDal from '../dal/resturantDishCategory';

// export const createResturantDishCategory = async (payload: ResturantDishCategoryCreationInput): Promise<ResturantDishCategoryCreationOutput> => {
//     const newDishCategoryPayload: DishCategoryInterface = {
//         id: payload.id,
//         name: payload.name
//     }

//     try {
//         const result: [DishCategoryOutput, ResturantDishCategoryOutput] = await sequelizeConnection.transaction(async (t) => {
//             let newDishCategory: DishCategoryOutput | null = await resturantDishCategoryDal.getDishCategoryByName(newDishCategoryPayload.name, t)

//             if (!newDishCategory) {
//                 newDishCategory = await resturantDishCategoryDal.createDishCategory(newDishCategoryPayload, t)
//             }

//             const newResturantDishCategoryPayload: ResturantDishCategoryInput = {
//                 id: undefined,
//                 resturant_id: payload.resturant_id,
//                 dish_category_id: newDishCategory.id
//             }

//             const newResturantDishCategory: ResturantDishCategoryOutput = await resturantDishCategoryDal.createResturantDishCategory(newResturantDishCategoryPayload, t)

//             return [newDishCategory, newResturantDishCategory]
//         })

//         return ({
//             id: result[0].id,
//             name: result[0].name,
//             resturant_id: result[1].resturant_id,
//             resturant_dish_category_id: result[1].id,
//         })
//     } catch (error) {
//         console.log('Error in createResturantDishCategory service : ', error)
//         if (error instanceof Error) {
//             throw new Error(error.message)
//         }
//         throw new Error('Unknown Error')
//     }
// }

export const createDishCategoryWithResturantId = (payload: DishCategoryCreationRequestWithResturant) => {
    const dalPayload: DishCategoryCreationInputWithResturantId = {
        name: payload.name,
        ResturantDishCategories: [{
            resturant_id: payload.resturant_id
        }]
    }

    return resturantDishCategoryDal.createDishCategoryWithResturantId(dalPayload)
}

// export const getResturantDishCategories = (resturantId: number) => {
//     return resturantDishCategoryDal.getResturantDishCategories(resturantId);
// }