/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FindByTerm } from './FindByTerm.services';

class ListByTermControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const term: Request['query'] = request.query;

        const findOneById = getCustomRepository(FindByTerm);

        const car = await findOneById.execute({ term });

        return response.status(201).json(car);
    }
}

export { ListByTermControllers };
