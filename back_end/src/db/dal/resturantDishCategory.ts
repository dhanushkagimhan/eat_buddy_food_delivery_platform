import { DishCategoryCreationInputWithResturantId, DishCategoryOutput, ResturantOutput } from "../../common/interfaces"
import { DishCategory, Resturant, ResturantDishCategory } from "../models"

export const createDishCategoryWithResturantId = async (payload: DishCategoryCreationInputWithResturantId): Promise<DishCategoryOutput> => {
    const newDishCategory = await DishCategory.create(payload, { include: [ResturantDishCategory] })
    console.log('New dish category with resturant id : ', newDishCategory)
    return newDishCategory
}

export const getDishCategoriesWithResturantId = async (resrutantId: number): Promise<ResturantOutput | null> => {
    const resturntWithDishCategories = await Resturant.findByPk(resrutantId, {
        include: {
            model: DishCategory,
            through: {
                attributes: []
            }
        }
    })

    console.log("resturant's DishCategories : ", resturntWithDishCategories)
    return resturntWithDishCategories
}