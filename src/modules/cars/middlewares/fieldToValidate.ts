import { body } from 'express-validator';

const fieldTovalidate = [
    body('marca')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO marca É REQUERODO')
        .isString()
        .withMessage('ESTE CAMPO É APANAS PARA PALAVRAS')
        .isLength({ min: 4 })
        .withMessage('PRECISA TER NO MINIMO 4 LETRAS'),

    body('model')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO model É REQUERODO')
        .isString()
        .withMessage('ESTE CAMPO É APANAS PARA PALAVRAS')
        .isLength({ min: 2 })
        .withMessage('PRECISA TER NO MINIMO 2 LETRAS'),

    body('versao')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO versao É REQUERODO')
        .isString()
        .withMessage('ESTE CAMPO É APANAS PARA PALAVRAS')
        .isLength({ min: 2 })
        .withMessage('PRECISA TER NO MINIMO 2 LETRAS'),

    body('ano')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO ano É REQUERODO')
        .isLength({ min: 4 })
        .withMessage('PRECISA TER NO MINIMO 4 NÚMEROS'),

    body('quilometragem')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO quilometragem É REQUERODO')
        .isLength({ min: 4 })
        .withMessage('PRECISA TER NO MINIMO 4 NÚMEROS'),

    body('preco_de_venda')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO preco_de_venda É REQUERODO')
        .isLength({ min: 1 })
        .withMessage('PRECISA TER NO MINIMO 1 NÚMEROS'),

    body('tipo_de_cambio')
        .exists({ checkFalsy: true })
        .withMessage('CAMPO tipo_de_cambio É REQUERODO')
        .isString()
        .withMessage('ESTE CAMPO É APANAS PARA PALAVRAS')
        .isLength({ min: 3 })
        .withMessage('PRECISA TER NO MINIMO 3 LETRAS'),
];

export { fieldTovalidate };
