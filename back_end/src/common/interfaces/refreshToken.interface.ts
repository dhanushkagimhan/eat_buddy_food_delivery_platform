import { Optional } from "sequelize";

export interface RefreshTokenInterface {
    id: number;
    refresh_token: string;
    access_token: string;
    is_valid: boolean;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface RefreshTokenInput extends Optional<RefreshTokenInterface, 'id'> { }
export interface RefreshTokenOutput extends Required<RefreshTokenInterface> { }