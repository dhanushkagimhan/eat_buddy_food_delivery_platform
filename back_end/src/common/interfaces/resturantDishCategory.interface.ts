import { Optional } from "sequelize";

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