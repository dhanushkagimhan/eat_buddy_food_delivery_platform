import { Optional } from "sequelize";

export interface ResturantInterface {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ResturantInput extends Optional<ResturantInterface, 'id'> { }
export interface ResturantOutput extends Required<ResturantInterface> { }