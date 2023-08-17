import { Optional } from "sequelize";

export interface StaffInterface {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    resturant_id: number
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface StaffInput extends Optional<StaffInterface, 'id'> { }
export interface StaffOutput extends Required<StaffInterface> { }