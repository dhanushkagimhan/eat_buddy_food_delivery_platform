import { Request, Response } from "express";
import { ResturantInput } from "../../../common/interfaces";
import * as service from '../../../db/services/resturantService'

export const create = async (req: Request, res: Response) => {
    const payload: ResturantInput = req.body;
    try {
        const newResturant = await service.create(payload);
        return res.status(201).send(newResturant)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const getResturant = async (req: Request, res: Response) => {
    const id: number = req.params.id as unknown as number;
    try {
        const resturant = await service.getById(id);
        return res.status(200).send(resturant)
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message === 'Resturant not found!') {
                return res.status(404).send({ message: 'Resturant not found!' });
            }
        }

        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const update = async (req: Request, res: Response) => {
    const id: number = req.params.id as unknown as number;
    const payload: ResturantInput = req.body;
    try {
        const resturant = await service.update(id, payload);
        return res.status(200).send(resturant)
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message === 'Resturant not found!') {
                return res.status(404).send({ message: 'Resturant not found!' });
            }
        }

        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const deleteResturant = async (req: Request, res: Response) => {
    const id: number = req.params.id as unknown as number;
    try {
        await service.deleteById(id);
        return res.status(200).send({ message: 'Successfully deleted resturant!' })
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message === 'Resturant not found!') {
                return res.status(404).send({ message: 'Resturant not found!' });
            }
        }

        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const resturants = await service.getAll();
        return res.status(200).send(resturants)
    }
    catch (error) {
        console.log(`Unexpected Error : ${error}`)
        return res.status(500).send({ message: 'system Error' });
    }
}