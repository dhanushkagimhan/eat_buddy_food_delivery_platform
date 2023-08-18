import { Transaction } from "sequelize"
import { DishCategoryInput, DishCategoryOutput, ResturantDishCategoryInput, ResturantDishCategoryOutput } from "../../common/interfaces"
import { DishCategory, ResturantDishCategory } from "../models"

export const createDishCategory = async (payload: DishCategoryInput, t: Transaction): Promise<DishCategoryOutput> => {
    const resturantRes = await DishCategory.create(payload, { transaction: t }) as unknown as DishCategoryOutput
    return resturantRes
}

export const createResturantDishCategory = async (payload: ResturantDishCategoryInput, t: Transaction): Promise<ResturantDishCategoryOutput> => {
    const resturantRes = await ResturantDishCategory.create(payload, { transaction: t }) as unknown as ResturantDishCategoryOutput
    return resturantRes
}