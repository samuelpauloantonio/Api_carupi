/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { updatedCarsServices } from './updatedCars.services';

class UpdateCarsControllers {
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

        const updateCartService = getCustomRepository(updatedCarsServices);
        const cars = await updateCartService.execute({
            id: request.params.id,
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

export { UpdateCarsControllers, updatedCarsServices };
