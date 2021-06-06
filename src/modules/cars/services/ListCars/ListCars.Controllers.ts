/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FindOneById } from './FindOneById.services';

class ListCarsControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findOneById = getCustomRepository(FindOneById);

        const car = await findOneById.execute(id);

        return response.status(201).json(...car);
    }
}

export { ListCarsControllers };
