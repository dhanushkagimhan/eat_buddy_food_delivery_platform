import { Optional } from "sequelize";

export interface OrderInterface {
    id: number;
    total_price: number;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface OrderInput extends Optional<OrderInterface, 'id'> { }
export interface OrderOutput extends Required<OrderInterface> { }