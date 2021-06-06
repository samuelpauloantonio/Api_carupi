/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { DeleteOneCar } from './deleteOneCar.services';

class DeleteCarsControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteOneCar = getCustomRepository(DeleteOneCar);

        await deleteOneCar.execute({ id });

        return response.status(200).send();
    }
}

export { DeleteCarsControllers };
