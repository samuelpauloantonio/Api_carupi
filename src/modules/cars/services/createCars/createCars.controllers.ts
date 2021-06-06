/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CreateCarsServices } from './createCars.services';

class CreateCarsControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            marca,
            model,
            ano,
            preco_de_venda,
            versao,
            quilometragem,
            tipo_de_cambio,
        } = request.body;

        const createCarsServices = getCustomRepository(CreateCarsServices);
        const cars = await createCarsServices.execute({
            marca,
            model,
            ano,
            preco_de_venda,
            versao,
            quilometragem,
            tipo_de_cambio,
        });

        return response.status(201).json(...cars);
    }
}

export { CreateCarsControllers, CreateCarsServices };
