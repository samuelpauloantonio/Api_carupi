import { EntityRepository, getRepository } from 'typeorm';
import AppError from '../../../../erros/AppError';
import { Cars } from '../../models/CreateCars';
import { ICarsProps } from '../../repositories/ICars';
import { formatCars } from '../../useCases/formatCars.UseCase';

@EntityRepository(Cars)
class FindOneById {
    public async execute(id: string): Promise<ICarsProps[]> {
        const carsRepository = getRepository(Cars);

        const cars = await carsRepository.find();

        const filteredCars = cars.filter(OneCar => OneCar.id.toString() === id);

        if (filteredCars.length < 1)
            throw new AppError('Ther car not found by id');

        const newCar = formatCars(filteredCars);

        return newCar;
    }
}
export { FindOneById };
