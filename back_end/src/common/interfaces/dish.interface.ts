import { Optional } from "sequelize";

export interface DishInterface {
    id: number;
    name: string;
    rate: number;
    price: number;
    resturant_id: number;
    dish_category_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface DishInput extends Optional<DishInterface, 'id'> { }
export interface DishOutput extends Required<DishInterface> { }