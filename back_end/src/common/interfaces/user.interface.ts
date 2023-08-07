import { Optional } from "sequelize";

export interface UserInterface {
    id: number;
    first_name: string;
    last_name: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export interface UserInput extends Optional<UserInterface, 'id'> { }
export interface UserOutput extends Required<UserInterface> { }

export interface GetAllUsersFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}