import { Router } from "express";
import { patchCompany, patchProvider, patchGrocer, example } from "../controllers/update-controller";
import { verifyToken } from "../middlewares/auth-token";
import validator from '../middlewares/validator-params';

const router = Router();

router.route('/company')
    .patch(verifyToken, patchCompany)
// .delete(verifyToken, patchCompany)

router.route('/provider')
    .patch(verifyToken, validator.paramsProvider, validator.validatorParams, patchProvider);

router.route('/grocer')
    .patch(verifyToken, validator.paramsGrocer, validator.validatorParams, patchGrocer);

router.route('/example')
    .post(verifyToken, example)
    .delete(verifyToken, example);

export default router;