import * as userDal from '../dal/user'
import { UserInput, UserOutput, GetAllUsersFilters } from '../../common/interfaces'

export const create = (payload: UserInput): Promise<UserOutput> => {
    return userDal.create(payload)
}
// export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     return ingredientDal.update(id, payload)
// }
// export const getById = (id: number): Promise<IngredientOuput> => {
//     return ingredientDal.getById(id)
// }
// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }
export const getAll = (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
    return userDal.getAll(filters)
}