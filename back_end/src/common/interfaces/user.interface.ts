import { Optional } from "sequelize";

export interface UserInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export interface UserInput extends Optional<UserInterface, 'email'> { }
export interface UserOutput extends Required<UserInterface> { }
export interface UserResponse extends UserOutput {
    token: string;
}