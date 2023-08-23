import { Optional } from "sequelize";
import { DishCategoryInput } from "./dishCategory.interface";

export interface ResturantDishCategoryInterface {
    id: number;
    resturant_id: number;
    dish_category_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface ResturantDishCategoryInput extends Optional<ResturantDishCategoryInterface, 'id'> { }
export interface ResturantDishCategoryOutput extends Required<ResturantDishCategoryInterface> { }

export interface DishCategoryCreationRequestWithResturant {
    name: string;
    resturant_id: number;
}

export interface DishCategoryCreationInputWithResturantId extends DishCategoryInput {
    ResturantDishCategories: Optional<ResturantDishCategoryInput, 'dish_category_id'>[]
}

// export interface ResturantDishCategoryCreationOutput extends ResturantDishCategoryCreationInput {
//     resturant_dish_category_id: number;
// }