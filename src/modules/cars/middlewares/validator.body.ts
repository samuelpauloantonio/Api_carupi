import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

function CheckFileds(
    request: Request,
    response: Response,
    next: NextFunction,
): any {
    const erros = validationResult(request);

    if (!erros.isEmpty()) {
        return response.status(400).json(erros.array());
    }

    next();
}
export { CheckFileds };
