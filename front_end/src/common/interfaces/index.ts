import { RefreshToken, UserCredential, UserInterface } from "./user.interface";

interface AsyncThunkRejectError {
    message: string
}

export type { UserCredential, UserInterface, AsyncThunkRejectError, RefreshToken }