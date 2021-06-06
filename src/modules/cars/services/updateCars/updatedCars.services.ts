/* eslint-disable no-useless-constructor */
import { EntityRepository, getRepository } from 'typeorm';
import AppError from '../../../../erros/AppError';
import { ICarsProps, Cars } from '../../repositories/ICars';
import { formatCars } from '../../useCases/formatCars.UseCase';

@EntityRepository(Cars)
class updatedCarsServices {
    public async execute({
        id,
        marca,
        model,
        ano,
        preco_de_venda,
        quilometragem,
        tipo_de_cambio,
        versao,
    }: ICarsProps): Promise<ICarsProps[]> {
        const carsRepository = getRepository(Cars);

        const ListCars = await carsRepository.find();

        const findOne = ListCars.find(cars => cars.id.toString() === id);

        if (!findOne) throw new AppError('Car not found to update');

        const car = await carsRepository.save({
            ...findOne,
            marca,
            model,
            ano,
            preco_de_venda,
            quilometragem,
            tipo_de_cambio,
            versao,
            updated_At: new Date(),
        });

        const newCar = formatCars(Array(car));

        return newCar;
    }
}

export { updatedCarsServices };
