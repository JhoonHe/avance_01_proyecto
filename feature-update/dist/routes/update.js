"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const update_controller_1 = require("../controllers/update-controller");
const auth_token_1 = require("../middlewares/auth-token");
const validator_params_1 = __importDefault(require("../middlewares/validator-params"));
const router = (0, express_1.Router)();
const company = new update_controller_1.Company();
const provider = new update_controller_1.Provider();
const grocer = new update_controller_1.Grocer();
router.route('/company')
    .patch(auth_token_1.verifyToken, company.patchCompany)
    .delete(auth_token_1.verifyToken, company.patchCompany);
router.route('/provider')
    .patch(auth_token_1.verifyToken, validator_params_1.default.paramsProvider, validator_params_1.default.validatorParams, provider.patchProvider);
router.route('/grocer')
    .patch(auth_token_1.verifyToken, validator_params_1.default.paramsGrocer, validator_params_1.default.validatorParams, grocer.patchGrocer);
router.route('/example')
    .post(auth_token_1.verifyToken, update_controller_1.example)
    .delete(auth_token_1.verifyToken, update_controller_1.example);
exports.default = router;
