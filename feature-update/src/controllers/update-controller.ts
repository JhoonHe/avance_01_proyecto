import { Request, Response } from "express";
import updateService from "../services/update-service";

import { dataDecoded } from '../middlewares/auth-token';

export const example = (req: Request, res: Response) => {

    console.log(dataDecoded);

    res.send('Hola');
};

export const patchCompany = (req: Request, res: Response) => {

    const { email, role, id } = dataDecoded;

    let data: object = {
        email,
        role,
        id
    }

    updateService.updateDataCompany(data, req.body, (error: any, results: any) => {

    });
}

export const patchProvider = (req: Request, res: Response) => {

    try {

        const { email, role, id } = dataDecoded;

        let data: object = {
            email,
            role,
            id
        }

        // console.log(data);

        updateService.updateDataProvider(data, req.body, (error: any, results: any) => {
            if (error) {
                res.status(500).json({ "error-controller": error });
            }
            if (results) {
                res.status(200).json({ "Status": "oki", "result": results });
            }
        });

    } catch (error) {
        res.status(500).json({ "failed to update profile": error });
    }
}

export const patchGrocer = () => {

}

