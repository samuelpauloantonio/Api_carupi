import { Cars } from '../models/CreateCars';

interface ICarsProps {
    id?: string;
    marca: string;
    model: string;
    versao: string;
    ano: number;
    preco_de_venda: number;
    quilometragem: number;
    tipo_de_cambio: string;
    create_At?: Date;
    updated_At?: Date;
}
interface ICarsRepository {
    createCars({
        marca,
        model,
        versao,
        ano,
        quilometragem,
        tipo_de_cambio,
    }: ICarsProps): Promise<Cars>;

    getCars(): Promise<Cars[]>;
}
export { ICarsRepository, ICarsProps, Cars };
