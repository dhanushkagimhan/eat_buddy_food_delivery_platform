import { Optional } from "sequelize";

export interface UserInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserInterface, 'email'> { }
export interface UserOutput extends Required<UserInterface> { }
export interface UserResponse extends Omit<UserInterface, 'password' | 'createdAt' | 'updatedAt' | 'deletedAt'> {
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    access_token: string;
    refresh_token: string;
}