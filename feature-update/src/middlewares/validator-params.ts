import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express'

let paramsProvider: any = [
    check('nit_provider').isLength({ min: 9, max: 15 }).optional(),
    check('email_provider').isEmail().optional(),
    check('name_provider').isLength({ min: 1, max: 50 }).optional(),
    check('last_name_provider').isLength({ min: 1, max: 40 }).optional(),
    check('name_company').isLength({ min: 1, max: 100 }).optional(),
    check('city_provider').isLength({ min: 1, max: 40 }).optional(),
    check('password_provider').isLength({ min: 8, max: 20 }).optional(),
    check('neighborhood').isLength({ min: 1, max: 40 }).optional(),
    check('street').isLength({ min: 1, max: 30 }).optional(),
    check('number_street').isLength({ min: 1, max: 20 }).optional(),
    check('number_provider').isLength({ min: 1, max: 15 }).optional(),
];

let paramsGrocer: any = [
    check('email_grocer').isEmail().optional(),
    check('name_grocer').isLength({ min: 1, max: 40 }).optional(),
    check('last_name_grocer').isLength({ min: 1, max: 40 }).optional(),
    check('city_grocer').isLength({ min: 1, max: 50 }).optional(),
    check('password_grocer').isLength({ min: 8, max: 20 }).optional(),
    check('neighborhood').isLength({ min: 8, max: 40 }).optional(),
    check('street').isLength({ min: 1, max: 30 }).optional(),
    check('number_street').isLength({ min: 1, max: 5 }).optional(),
    check('number_grocer').isLength({ min: 1, max: 15 }).optional(),
];

let paramsPassword: any = [
    check('new_password').isLength({ min: 8, max: 20 }).optional(),
];

function validatorParams(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    paramsProvider,
    paramsGrocer,
    paramsPassword,
    validatorParams
}