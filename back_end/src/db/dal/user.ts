import { Op } from 'sequelize'
import { User } from '../models'
import { UserInput, UserOutput, GetAllUsersFilters } from '../../common/interfaces'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload) as unknown as UserOutput
    return user
}

// export const update = async (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     const ingredient = await Ingredient.findByPk(id)
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error('not found')
//     }
//     const updatedIngredient = await (ingredient as Ingredient).update(payload)
//     return updatedIngredient
// }

// export const getById = async (id: number): Promise<IngredientOuput> => {
//     const ingredient = await Ingredient.findByPk(id)
//     if (!ingredient) {
//         // @todo throw custom error
//         throw new Error('not found')
//     }
//     return ingredient
// }

// export const deleteById = async (id: number): Promise<boolean> => {
//     const deletedIngredientCount = await Ingredient.destroy({
//         where: { id }
//     })
//     return !!deletedIngredientCount
// }

export const getAll = async (filters?: GetAllUsersFilters): Promise<UserOutput[]> => {
    return User.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    }) as unknown as UserOutput[]
}