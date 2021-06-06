import { EntityRepository, getMongoRepository } from 'typeorm';
import AppError from '../../../../erros/AppError';
import { Cars } from '../../models/CreateCars';

interface IRequestProps {
    id: string;
}

@EntityRepository(Cars)
class DeleteOneCar {
    public async execute({ id }: IRequestProps): Promise<void> {
        const carsRepository = getMongoRepository(Cars);
        const ListCars = await carsRepository.find();

        const findedCars = ListCars.filter(car => car.id.toString() === id);

        if (findedCars.length < 1) {
            throw new AppError('Car not found to delete');
        }

        await carsRepository.delete(findedCars[0].id);
    }
}
export { DeleteOneCar, IRequestProps };
