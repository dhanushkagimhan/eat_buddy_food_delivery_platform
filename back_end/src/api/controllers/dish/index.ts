import { Request, Response } from "express";
import * as service from '../../../db/services/dishService'

export const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body;

    try {
        const newDish = await service.create(payload);
        return res.status(201).send(newDish)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const getResturantCategorizedDishes = async (req: Request, res: Response): Promise<Response> => {
    const resturantId: number = req.params.resturant_id as unknown as number;

    if (!resturantId) {
        return res.status(400).send({ message: 'Please add request_id path value' })
    }

    try {
        const categorizedDishes = await service.getResturantCategorizedDishes(resturantId)

        if (!categorizedDishes) {
            return res.status(404).send({ message: 'Resturant not found' })
        }

        return res.status(200).send(categorizedDishes)
    } catch (error) {
        console.log('Error when getResturantCategorizedDishes : ', error)
        return res.status(500).send({ message: 'unknown error' })
    }
}