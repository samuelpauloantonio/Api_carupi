import typeorm, { Connection } from 'typeorm';
import AppError from '../../src/erros/AppError';
import { Cars } from '../../src/modules/cars/models/CreateCars';

let carsRepository: Connection;
describe('Import', () => {
    beforeAll(async () => {
        if (!process.env.DB_MONGO_URL) {
            throw new AppError('MondoDB server not initialized', 500);
        }

        carsRepository = await typeorm.createConnection({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            username: '',
            password: '',
            database: 'vehicles',
        });

        carsRepository = await carsRepository.connect();
    });

    afterAll(async () => {
        await carsRepository.close();
    });

    beforeEach(async () => {
        await carsRepository.getMongoRepository(Cars).deleteMany({});
    });

    it('should be to create new Cars ', async () => {
        const n = carsRepository.getMongoRepository(Cars);
        const carTest = n.create({
            marca: 'Carro Teste',
            model: 'Jet',
            versao: '123',
            ano: 2021,
            preco_de_venda: 336,
            tipo_de_cambio: 'venda',
            quilometragem: 22,
        });

        await n.save(carTest);
        const list = await n.find({});

        expect(list).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    marca: 'Carro Teste',
                    model: 'Jet',
                    versao: '123',
                    ano: 2021,
                    preco_de_venda: 336,
                    tipo_de_cambio: 'venda',
                    quilometragem: 22,
                }),
            ]),
        );
    });
});
