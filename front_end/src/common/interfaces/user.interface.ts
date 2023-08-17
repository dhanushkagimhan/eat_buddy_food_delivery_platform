export interface UserCredential {
    email: string,
    password: string
}

export interface UserInterface {
    id?: number;
    email: string;
    first_name: string;
    last_name: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    access_token?: string;
    refresh_token?: string;
}

export interface RefreshToken {
    refresh_token: string;
    access_token: string;
}

export interface GetUserByRefreshTokenInput {
    refresh_token: string;
}