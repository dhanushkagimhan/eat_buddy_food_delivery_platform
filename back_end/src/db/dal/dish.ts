import { DishInput, DishOutput } from "../../common/interfaces";
import { Dish } from "../models";

export const create = async (payload: DishInput): Promise<DishOutput> => {
    const newDish = await Dish.create(payload)
    return newDish;
}