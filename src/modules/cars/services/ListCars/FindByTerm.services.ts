/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import { EntityRepository, getMongoRepository, getRepository } from 'typeorm';
import { Request, response, Response } from 'express';
import AppError from '../../../../erros/AppError';
import { Cars } from '../../models/CreateCars';
import { ICarsProps } from '../../repositories/ICars';
import { formatCars } from '../../useCases/formatCars.UseCase';
import { ListAllCarsControllers } from './ListAll.controllers';

interface IrequestProps {
    term: Request['query'];
}
@EntityRepository(Cars)
class FindByTerm {
    public async execute({ term }: IrequestProps): Promise<ICarsProps[]> {
        const carsRepository = getMongoRepository(Cars);
        const Term = term;

        const Listterm = [
            'marca',
            'model',
            'ano',
            'preco_de_venda',
            'versao',
            'quilometragem',
            'tipo_de_cambio',
        ];

        const ensureHasTerm = Listterm.some(
            value => value === Object.keys(Term)[0],
        );

        if (!ensureHasTerm || Object.keys(term).length >= 2) {
            throw new AppError(
                'please send One Term  and correct term to search one or many car',
            );
        }

        let result: ICarsProps[] = [];

        const car = await carsRepository.find();
        switch (Object.keys(Term)[0]) {
            case 'marca':
                result = car.filter(
                    cars => cars.marca === `${Object.values(Term)}`,
                );
                break;
            case 'model':
                result = car.filter(
                    cars => cars.model === `${Object.values(Term)}`,
                );
                break;
            case 'ano':
                result = car.filter(
                    cars => cars.ano === Number(Object.values(Term)),
                );
                break;

            case 'preco_de_venda':
                result = car.filter(
                    cars => cars.preco_de_venda === Number(Object.values(Term)),
                );
                break;
            case 'versao':
                result = car.filter(
                    cars => cars.versao === `${Object.values(Term)}`,
                );
                break;
            case 'quilometragem':
                result = car.filter(
                    cars => cars.quilometragem === Number(Object.values(Term)),
                );
                break;

            case 'tipo_de_cambio':
                result = car.filter(
                    cars => cars.tipo_de_cambio === `${Object.values(Term)}`,
                );
                break;
            default:
                console.log('term not found');
        }

        const newCar = formatCars(result);

        return newCar;
    }
}

export { FindByTerm };
