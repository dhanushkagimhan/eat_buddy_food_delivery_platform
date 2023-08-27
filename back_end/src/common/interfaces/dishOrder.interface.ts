import { Optional } from "sequelize";

export interface DishOrderInterface {
    id: number;
    quantity: number;
    dish_quantity_total_price: number;
    order_id: number;
    dish_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface DishOrderInput extends Optional<DishOrderInterface, 'id'> { }
export interface DishOrderOutput extends Required<DishOrderInterface> { }