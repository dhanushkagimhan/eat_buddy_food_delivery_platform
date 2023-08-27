import { Request, Response } from "express";
import * as service from '../../../db/services/dishCategoryService'
import { DishCategoryCreationRequest } from "../../../common/interfaces";

export const createDishCategory = async (req: Request, res: Response): Promise<Response> => {
    const payload: DishCategoryCreationRequest = req.body;
    try {
        const newDishCategory = await service.createDishCategory(payload);
        return res.status(201).send(newDishCategory)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const getDishCategoriesByResturantId = async (req: Request, res: Response): Promise<Response> => {
    const resturantId: number = req.params.resturant_id as unknown as number;
    if (!resturantId) {
        return res.status(400).send({ message: 'Please add request_id path value' })
    }

    try {
        const DishCategories = await service.getDishCategoriesByResturantId(resturantId)

        if (!DishCategories) {
            return res.status(404).send({ message: 'Resturant not found' })
        }

        return res.status(200).send(DishCategories)
    } catch (error) {
        console.log('Error when getResturantDishCategories : ', error)
        return res.status(500).send({ message: 'unknown error' })
    }
}