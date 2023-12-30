"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db-config"));
const updateDataCompany = (dataToken, dataUpdate, callback) => {
};
const updateDataProvider = (dataToken, dataUpdate, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const queryDataUpdate = '';
    try {
        const currentData = yield getCurrentData('document_provider', dataToken.role, dataToken.id);
        console.log("current", currentData);
        const otherData = yield getCurrentData('document_grocer', 'grocer', '1234567890');
        console.log("otherData", otherData);
        callback(null, otherData);
    }
    catch (error) {
        console.log(error);
        return callback(error);
    }
});
const getCurrentData = (document_type, role, id) => {
    const queryCurrentData = `SELECT * FROM ${role} WHERE ${document_type} = ?`;
    return new Promise((resolve, reject) => {
        db_config_1.default.query(queryCurrentData, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
const compararDatos = (datosActuales, datosNuevos) => {
    const cambios = {};
    for (const key in datosNuevos) {
        if (Object.prototype.hasOwnProperty.call(datosNuevos, key)) {
            if (datosActuales[key] !== datosNuevos[key]) {
                cambios[key] = datosNuevos[key];
            }
        }
    }
    return cambios;
};
const updateDataGrocer = (dataToken, dataUpdate, callback) => {
};
exports.default = {
    updateDataCompany,
    updateDataProvider,
    updateDataGrocer
};
