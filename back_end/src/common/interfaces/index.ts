import { UserInterface, UserInput, UserOutput, UserResponse } from "./user.interface";

interface GetAllFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export { UserInterface, UserInput, UserOutput, GetAllFilters, UserResponse }