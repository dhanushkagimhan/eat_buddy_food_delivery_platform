import { UserOutput, UserResponse } from "../../../common/interfaces";

export const toUser = (userRes: UserOutput, accessToken: string, refreshToken: string): UserResponse => {
    return {
        id: userRes.id,
        email: userRes.email,
        first_name: userRes.first_name,
        last_name: userRes.last_name,
        access_token: accessToken,
        refresh_token: refreshToken,
        created_at: userRes.createdAt,
        updated_at: userRes.updatedAt,
        deleted_at: userRes.deletedAt
    }
}