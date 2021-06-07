import { ListAllCarsControllers } from './ListAll.controllers';
import { ListByTermControllers } from './ListByTerm.Controllers';
import { ListCarsControllers } from './ListCars.Controllers';

const ListOneCar = new ListCarsControllers();
const findByTerm = new ListByTermControllers();
const listAllCarsControllers = new ListAllCarsControllers();

export { ListOneCar, findByTerm, listAllCarsControllers };
