import { Request, Response } from "express";
import * as service from '../../../db/services/resturantDishCategory'
import { DishCategoryCreationRequestWithResturant } from "../../../common/interfaces";

export const createResturantDishCategory = async (req: Request, res: Response): Promise<Response> => {
    const payload: DishCategoryCreationRequestWithResturant = req.body;
    try {
        const newResturantDishCategory = await service.createDishCategoryWithResturantId(payload);
        return res.status(201).send(newResturantDishCategory)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const getResturantDishCategories = async (req: Request, res: Response): Promise<Response> => {
    const resturantId: number = req.params.resturant_id as unknown as number;
    if (!resturantId) {
        return res.status(400).send({ message: 'Please add request_id path value' })
    }

    try {
        const resturantDishCategories = await service.getResturantDishCategories(resturantId)

        if (!resturantDishCategories) {
            return res.status(404).send({ message: 'Resturant not found' })
        }

        return res.status(200).send(resturantDishCategories)
    } catch (error) {
        console.log('Error when getResturantDishCategories : ', error)
        return res.status(500).send({ message: 'unknown error' })
    }
}