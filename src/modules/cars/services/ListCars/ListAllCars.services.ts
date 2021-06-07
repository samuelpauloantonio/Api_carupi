import { EntityRepository, getMongoRepository } from 'typeorm';
import { Cars } from '../../models/CreateCars';
import { ICarsProps } from '../../repositories/ICars';
import { formatCars } from '../../useCases/formatCars.UseCase';

@EntityRepository(Cars)
class ListAllCarServices {
    public async execute(): Promise<ICarsProps[]> {
        const carsRepository = getMongoRepository(Cars);
        const ListCars = await carsRepository.find();

        const cars = formatCars(ListCars);

        return cars;
    }
}
export { ListAllCarServices };
