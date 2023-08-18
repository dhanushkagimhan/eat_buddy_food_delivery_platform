import { Request, Response } from "express";
import * as service from '../../../db/services/resturantDishCategory'
import { ResturantDishCategoryCreationInput } from "../../../common/interfaces";

export const createResturantDishCategory = async (req: Request, res: Response): Promise<Response> => {
    const payload: ResturantDishCategoryCreationInput = req.body;
    try {
        const newResturantDishCategory = await service.createResturantDishCategory(payload);
        return res.status(201).send(newResturantDishCategory)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}