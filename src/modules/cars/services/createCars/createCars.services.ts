import { EntityRepository, getCustomRepository } from 'typeorm';
import AppError from '../../../../erros/AppError';
import { Cars, CarsRepository } from '../../repositories/Cars';
import { ICarsProps } from '../../repositories/ICars';

@EntityRepository(Cars)
class CreateCarsServices {
    public async execute({ nome, marca }: ICarsProps): Promise<Cars> {
        const carsRepository = getCustomRepository(CarsRepository);

        const cars = await carsRepository.createCars({ nome, marca });

        if (!cars) throw new AppError('problem to create new Car');
        return cars;
    }
}

export { CreateCarsServices };
