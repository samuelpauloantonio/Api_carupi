import { ICarsProps } from '../repositories/ICars';

function formatCars(cars: ICarsProps[]): ICarsProps[] {
    const listcar = cars.map(OneCar => {
        return {
            id: OneCar.id,
            marca: OneCar.marca,
            model: OneCar.model,
            versao: OneCar.versao,
            quilometragem: OneCar.quilometragem,
            ano: OneCar.ano,
            tipo_de_cambio: OneCar.tipo_de_cambio,
            preco_de_venda: OneCar.preco_de_venda,
            create_At: OneCar.create_At,
            updated_At: OneCar.updated_At,
        };
    });

    return listcar;
}

export { formatCars };
