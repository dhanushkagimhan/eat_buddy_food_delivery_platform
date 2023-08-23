import { DishInput, DishInterface, DishOutput } from "./dish.interface";
import { DishCategoryInput, DishCategoryInterface, DishCategoryOutput } from "./dishCategory.interface";
import { DishOrderInput, DishOrderInterface, DishOrderOutput } from "./dishOrder.interface";
import { OrderInput, OrderInterface, OrderOutput } from "./order.interface";
import { RefreshTokenInput, RefreshTokenInterface, RefreshTokenOutput, RefreshTokenResponse } from "./refreshToken.interface";
import { ResturantInput, ResturantInterface, ResturantOutput, ResturantResponse } from "./resturant.interface";
import { DishCategoryCreationInputWithResturantId, DishCategoryCreationRequestWithResturant, ResturantDishCategoryInput, ResturantDishCategoryInterface, ResturantDishCategoryOutput } from "./resturantDishCategory.interface";
import { StaffInput, StaffInterface, StaffOutput } from "./staff.interface";
import { UserInterface, UserInput, UserOutput, UserResponse } from "./user.interface";

export {
    UserInterface,
    UserInput,
    UserOutput,
    UserResponse,
    ResturantInterface,
    ResturantInput,
    ResturantOutput,
    RefreshTokenInterface,
    RefreshTokenInput,
    RefreshTokenOutput,
    RefreshTokenResponse,
    ResturantResponse,
    StaffInterface,
    StaffInput,
    StaffOutput,
    DishCategoryInterface,
    DishCategoryInput,
    DishCategoryOutput,
    ResturantDishCategoryInterface,
    ResturantDishCategoryInput,
    ResturantDishCategoryOutput,
    DishInterface,
    DishInput,
    DishOutput,
    OrderInterface,
    OrderInput,
    OrderOutput,
    DishOrderInterface,
    DishOrderInput,
    DishOrderOutput,
    DishCategoryCreationRequestWithResturant,
    // ResturantDishCategoryCreationOutput
    DishCategoryCreationInputWithResturantId
}