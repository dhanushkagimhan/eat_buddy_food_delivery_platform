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