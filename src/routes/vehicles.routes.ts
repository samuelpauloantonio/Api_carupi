import express from 'express';
import { createCarsServices } from '../modules/cars/services/createCars';

const routes = express.Router();

routes.post('/', async (request, response) => {
    const { nome, marca } = request.body;

    const cars = await createCarsServices.execute({ nome, marca });

    return response.status(201).json(cars);
});

export default routes;
