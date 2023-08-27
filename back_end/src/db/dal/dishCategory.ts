import { DishCategoryCreationInput, DishCategoryOutput, ResturantOutput } from "../../common/interfaces"
import { DishCategory, Resturant, ResturantDishCategory } from "../models"

export const createDishCategory = async (payload: DishCategoryCreationInput): Promise<DishCategoryOutput> => {
    const newDishCategory = await DishCategory.create(payload, { include: [ResturantDishCategory] })
    console.log('New dish category with resturant id : ', newDishCategory)
    return newDishCategory
}

export const getDishCategoriesByResturantId = async (resrutantId: number): Promise<ResturantOutput | null> => {
    const dishCategories = await Resturant.findByPk(resrutantId, {
        include: {
            model: DishCategory,
            through: {
                attributes: []
            }
        }
    })

    console.log("resturant's DishCategories : ", dishCategories)
    return dishCategories
}