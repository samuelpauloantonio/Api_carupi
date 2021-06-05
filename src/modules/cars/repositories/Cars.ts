import { EntityRepository, Repository } from 'typeorm';
import { Cars } from '../models/CreateCars';
import { ICarsProps, ICarsRepository } from './ICars';

@EntityRepository(Cars)
class CarsRepository extends Repository<Cars> implements ICarsRepository {
    public async createCars({ nome, marca }: ICarsProps): Promise<Cars> {
        const carsRepository = this.create({
            nome,
            marca,
        });

        const car = await this.save(carsRepository);

        return car;
    }
}
export { CarsRepository, Cars };
