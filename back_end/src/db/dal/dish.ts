import { DishCategoryOutput, DishInput, DishOutput } from "../../common/interfaces";
import { Dish, DishCategory } from "../models";

export const create = async (payload: DishInput): Promise<DishOutput> => {
    const newDish = await Dish.create(payload)
    return newDish;
}

export const getResturantCategorizedDishes = async (resturantId: number): Promise<DishCategoryOutput[]> => {
    const response = await DishCategory.findAll({ include: [{ model: Dish, where: { resturant_id: resturantId } }] })
    return response
}