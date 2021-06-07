import express, { Request, Response } from 'express';
import { fieldTovalidate } from '../modules/cars/middlewares/fieldToValidate';
import { CheckFileds } from '../modules/cars/middlewares/validator.body';
import { CreateCarsController } from '../modules/cars/services/createCars';
import { deleteOneCar } from '../modules/cars/services/DeleteCars';
import { ListOneCar, findByTerm } from '../modules/cars/services/ListCars';
import { updateCarsControllers } from '../modules/cars/services/updateCars';

const routes = express.Router();

routes.get('/', (request, respose) => {
    return findByTerm.handle(request, respose);
});
routes.get('/:id', (request, respose) => {
    return ListOneCar.handle(request, respose);
});
routes.post(
    '/',
    fieldTovalidate,
    CheckFileds,

    (request: Request, response: Response) => {
        return CreateCarsController.handle(request, response);
    },
);
routes.put('/:id', (request, response) => {
    return updateCarsControllers.handle(request, response);
});
routes.delete('/:id', async (request, response) => {
    return deleteOneCar.handle(request, response);
});

export default routes;
