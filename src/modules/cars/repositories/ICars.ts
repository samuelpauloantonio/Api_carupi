import { Cars } from '../models/CreateCars';

interface ICarsProps {
    nome: string;
    marca: string;
}

interface ICarsRepository {
    createCars({ nome, marca }: ICarsProps): Promise<Cars>;
}
export { ICarsRepository, ICarsProps };
