import { RefreshTokenOutput, UserOutput, UserResponse } from "../../../common/interfaces";

export const toUser = (userRes: UserOutput, tokens?: RefreshTokenOutput): UserResponse => {
    return {
        id: userRes.id,
        email: userRes.email,
        first_name: userRes.first_name,
        last_name: userRes.last_name,
        access_token: tokens?.access_token,
        refresh_token: tokens?.refresh_token,
        created_at: userRes.createdAt,
        updated_at: userRes.updatedAt
    }
}