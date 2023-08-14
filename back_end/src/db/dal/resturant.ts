import { Resturant } from '../models'
import { ResturantInput, ResturantOutput } from '../../common/interfaces'

export const create = async (payload: ResturantInput): Promise<ResturantOutput> => {
    const resturantRes = await Resturant.create(payload) as unknown as ResturantOutput
    return resturantRes
}

export const getByid = async (rId: number): Promise<ResturantOutput> => {
    const resturantRes = await Resturant.findOne({ where: { id: rId } }) as unknown as ResturantOutput;
    if (!resturantRes) {
        throw new Error('Resturant not found!')
    }
    return resturantRes
}

export const update = async (id: number, payload: Partial<ResturantInput>): Promise<ResturantOutput> => {
    const resturantRes = await Resturant.findByPk(id)
    if (!resturantRes) {
        throw new Error('Resturant not found!')
    }
    const updatedResturantRes = await (resturantRes).update(payload)
    return updatedResturantRes
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedResturant = await Resturant.destroy({
        where: { id }
    })
    if (!deletedResturant) {
        throw new Error('Resturant not found!')
    }
    return !!deletedResturant
}

export const getAll = async (): Promise<ResturantOutput[]> => {
    return await Resturant.findAll()
}