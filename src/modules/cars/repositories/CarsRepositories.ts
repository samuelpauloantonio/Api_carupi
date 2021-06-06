import { EntityRepository, Repository } from 'typeorm';
import { Cars } from '../models/CreateCars';
import { ICarsProps, ICarsRepository } from './ICars';

@EntityRepository(Cars)
class CarsRepository extends Repository<Cars> implements ICarsRepository {
    public async createCars({
        marca,
        model,
        ano,
        preco_de_venda,
        quilometragem,
        tipo_de_cambio,
        versao,
    }: ICarsProps): Promise<Cars> {
        const carsRepository = this.create({
            marca,
            model,
            ano,
            preco_de_venda,
            versao,
            quilometragem,
            tipo_de_cambio,
        });

        const car = await this.save(carsRepository);

        return car;
    }

    public async getCars(): Promise<Cars[]> {
        const cars = await this.find();
        return cars;
    }
}
export { CarsRepository, Cars };
