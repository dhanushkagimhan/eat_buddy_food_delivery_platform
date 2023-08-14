import * as resturantDal from '../dal/resturant';
import { ResturantInput, ResturantOutput } from '../../common/interfaces';

export const create = async (payload: ResturantInput): Promise<ResturantOutput> => {
    return await resturantDal.create(payload);
}

export const getById = async (id: number): Promise<ResturantOutput> => {
    return await resturantDal.getByid(id);
}

export const update = async (id: number, payload: Partial<ResturantInput>): Promise<ResturantOutput> => {
    return await resturantDal.update(id, payload);
}

export const deleteById = async (id: number): Promise<boolean> => {
    return await resturantDal.deleteById(id);
}

export const getAll = async (): Promise<ResturantOutput[]> => {
    return await resturantDal.getAll();
}
