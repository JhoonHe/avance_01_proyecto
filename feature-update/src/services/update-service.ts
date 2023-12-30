import connection from '../config/db-config';

const updateDataCompany = (dataToken: any, dataUpdate: any, callback: any) => {

};

const updateDataProvider = async (dataToken: any, dataUpdate: any, callback: any) => {
    const queryDataUpdate: string = '';

    try {
        const currentData = await getCurrentData('document_provider', dataToken.role, dataToken.id);
        console.log("current", currentData);

        const otherData = await getCurrentData('document_grocer', 'grocer', '1234567890');
        console.log("otherData", otherData);

        callback(null, otherData);
    } catch (error) {
        console.log(error);
        return callback(error);
    }
};

const getCurrentData = (document_type: any, role: string, id: any) => {
    const queryCurrentData: string = `SELECT * FROM ${role} WHERE ${document_type} = ?`;

    return new Promise((resolve, reject) => {
        connection.query(queryCurrentData, [id], (error: any, results: any) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
};

const compararDatos = (datosActuales: any, datosNuevos: any): any => {
    const cambios: any = {};

    for (const key in datosNuevos) {
        if (Object.prototype.hasOwnProperty.call(datosNuevos, key)) {
            if (datosActuales[key] !== datosNuevos[key]) {
                cambios[key] = datosNuevos[key];
            }
        }
    }

    return cambios;
};

const updateDataGrocer = (dataToken: any, dataUpdate: any, callback: any) => {

};

export default {
    updateDataCompany,
    updateDataProvider,
    updateDataGrocer
}