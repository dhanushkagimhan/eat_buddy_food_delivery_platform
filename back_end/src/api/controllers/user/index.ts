import * as service from '../../../db/services/userService'
// import {CreateUserDTO, UpdateUserDTO, FilterUsersDTO} from '../../dto/user.dto'
// import {Ingredient} from '../../interfaces'
import { UserInterface, GetAllUsersFilters, UserInput, UserOutput } from '../../../common/interfaces'
// import * as mapper from './mapper'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    // return mapper.toIngredient(await service.create(payload))
    return await service.create(payload)
}
// export const update = async (id: number, payload: UpdateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.update(id, payload))
// }
// export const getById = async (id: number): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.getById(id))
// }
// export const deleteById = async(id: number): Promise<Boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }
export const getAll = async (filters: GetAllUsersFilters): Promise<UserInterface[]> => {
    return await service.getAll(filters)
}