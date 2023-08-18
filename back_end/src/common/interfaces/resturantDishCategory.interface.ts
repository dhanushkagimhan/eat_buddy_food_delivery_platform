import { Optional } from "sequelize";
import { DishCategoryInterface } from "./dishCategory.interface";

export interface ResturantDishCategoryInterface {
    id: number;
    resturant_id: number;
    dish_category_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ResturantDishCategoryInput extends Optional<ResturantDishCategoryInterface, 'id'> { }
export interface ResturantDishCategoryOutput extends Required<ResturantDishCategoryInterface> { }

export interface ResturantDishCategoryCreationInput extends DishCategoryInterface {
    resturant_id: number;
}

export interface ResturantDishCategoryCreationOutput extends ResturantDishCategoryCreationInput {
    resturant_dish_category_id: number;
}