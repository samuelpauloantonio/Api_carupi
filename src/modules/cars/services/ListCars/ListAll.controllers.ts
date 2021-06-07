import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ListAllCarServices } from './ListAllCars.services';

class ListAllCarsControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCarServices = getCustomRepository(ListAllCarServices);

        const cars = await listCarServices.execute();

        return response.status(200).json(cars);
    }
}

export { ListAllCarsControllers };
