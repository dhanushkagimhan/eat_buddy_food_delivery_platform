import { Optional } from "sequelize";

export interface DishCategoryInterface {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface DishCategoryInput extends Optional<DishCategoryInterface, 'id'> { }
export interface DishCategoryOutput extends Required<DishCategoryInterface> { }