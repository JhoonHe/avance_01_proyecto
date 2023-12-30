"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGrocer = exports.patchProvider = exports.patchCompany = exports.example = void 0;
const update_service_1 = __importDefault(require("../services/update-service"));
const auth_token_1 = require("../middlewares/auth-token");
const example = (req, res) => {
    console.log(auth_token_1.dataDecoded);
    res.send('Hola');
};
exports.example = example;
const patchCompany = (req, res) => {
    const { email, role, id } = auth_token_1.dataDecoded;
    let data = {
        email,
        role,
        id
    };
    update_service_1.default.updateDataCompany(data, req.body, (error, results) => {
    });
};
exports.patchCompany = patchCompany;
const patchProvider = (req, res) => {
    try {
        const { email, role, id } = auth_token_1.dataDecoded;
        let data = {
            email,
            role,
            id
        };
        // console.log(data);
        update_service_1.default.updateDataProvider(data, req.body, (error, results) => {
            if (error) {
                res.status(500).json({ "error-controller": error });
            }
            if (results) {
                res.status(200).json({ "Status": "oki", "result": results });
            }
        });
    }
    catch (error) {
        res.status(500).json({ "failed to update profile": error });
    }
};
exports.patchProvider = patchProvider;
const patchGrocer = () => {
};
exports.patchGrocer = patchGrocer;
