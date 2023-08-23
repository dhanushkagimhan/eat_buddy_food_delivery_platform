import { Transaction } from "sequelize"
import { DishCategoryCreationInputWithResturantId, DishCategoryInput, DishCategoryOutput, ResturantDishCategoryInput, ResturantDishCategoryOutput } from "../../common/interfaces"
import { DishCategory, ResturantDishCategory } from "../models"

// export const createDishCategory = async (payload: DishCategoryInput, t: Transaction): Promise<DishCategoryOutput> => {
//     const resturantRes = await DishCategory.create(payload, { transaction: t });
//     return resturantRes
// }

// export const createResturantDishCategory = async (payload: ResturantDishCategoryInput, t: Transaction): Promise<ResturantDishCategoryOutput> => {
//     const resturantRes = await ResturantDishCategory.create(payload, { transaction: t });
//     return resturantRes
// }

// export const getDishCategoryByName = async (dishCategoryName: string, t: Transaction): Promise<DishCategoryOutput | null> => {
//     const resturantRes = await DishCategory.findOne({ where: { name: dishCategoryName }, transaction: t });
//     return resturantRes
// }

export const createDishCategoryWithResturantId = async (payload: DishCategoryCreationInputWithResturantId) => {
    const newDishCategory = await DishCategory.create(payload, { include: [ResturantDishCategory] })
    console.log('New dish category with resturant id : ', newDishCategory)
    return newDishCategory
}

// export const getResturantDishCategories = async (resrutantId: number) => {
//     const resturntDishCategories = await ResturantDishCategory.findAll({ where: { resturant_id: resrutantId }, include: DishCategory })
//     console.log('resturantDishCategories : ', resturntDishCategories)
//     return resturntDishCategories
// }