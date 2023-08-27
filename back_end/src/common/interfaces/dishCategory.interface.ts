import { Optional } from "sequelize";
import { ResturantDishCategoryInput } from "./resturantDishCategory.interface";

export interface DishCategoryInterface {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface DishCategoryInput extends Optional<DishCategoryInterface, 'id'> { }
export interface DishCategoryOutput extends Required<DishCategoryInterface> { }

export interface DishCategoryCreationRequest {
    name: string;
    resturant_id: number;
}

export interface DishCategoryCreationInput extends DishCategoryInput {
    ResturantDishCategories: Optional<ResturantDishCategoryInput, 'dish_category_id'>[]
}