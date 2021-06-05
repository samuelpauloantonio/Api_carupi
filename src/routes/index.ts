import express from 'express';

import vehiclesRoutes from './vehicles.routes';

const routes = express.Router();

routes.use('/veiculos', vehiclesRoutes);

export default routes;
