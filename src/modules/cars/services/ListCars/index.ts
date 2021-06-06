import { ListByTermControllers } from './ListByTerm.Controllers';
import { ListCarsControllers } from './ListCars.Controllers';

const ListOneCar = new ListCarsControllers();
const findByTerm = new ListByTermControllers();

export { ListOneCar, findByTerm };
