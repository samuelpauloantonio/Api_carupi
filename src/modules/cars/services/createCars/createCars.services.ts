/* eslint-disable no-useless-constructor */
import { EntityRepository, getCustomRepository } from 'typeorm';
import AppError from '../../../../erros/AppError';
import { CarsRepository } from '../../repositories/CarsRepositories';
import { ICarsProps, Cars } from '../../repositories/ICars';
import { formatCars } from '../../useCases/formatCars.UseCase';

@EntityRepository(Cars)
class CreateCarsServices {
    public async execute({
        marca,
        model,
        ano,
        preco_de_venda,
        quilometragem,
        tipo_de_cambio,
        versao,
    }: ICarsProps): Promise<ICarsProps[]> {
        const carsRepository = getCustomRepository(CarsRepository);

        const findCar = await carsRepository.findOne({
            marca,
            model,
            versao,
            ano,
        });

        if (findCar) {
            throw new AppError(
                'this car Already exists! please try to create with outher, marca , model , versao, and ano ',
            );
        }
        const cars = await carsRepository.createCars({
            marca,
            model,
            ano,
            preco_de_venda,
            versao,
            quilometragem,
            tipo_de_cambio,
        });

        const newCar = formatCars(Array(cars));

        return newCar;
    }
}

export { CreateCarsServices };
