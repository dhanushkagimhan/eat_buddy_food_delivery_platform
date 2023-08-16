import { ResturantInterface } from "./resturant.interface";
import { RefreshToken, UserCredential, UserInterface } from "./user.interface";

interface AsyncThunkRejectError {
    message: string
}

export type { UserCredential, UserInterface, AsyncThunkRejectError, RefreshToken, ResturantInterface }