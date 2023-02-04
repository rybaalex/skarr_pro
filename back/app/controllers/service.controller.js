const ServiceService = require('../services/service.service');
const responseData= require("../config/response");
class ServiceController {
    getService = async (res, db) => {
        const resultDB = await ServiceService.getService(db);
        console.log("-------------------", resultDB)
        if (resultDB) {
            responseData.response=resultDB
            return res.status(200).send(responseData)
        } else {
            responseData.hasError=true
            responseData.errorMessage="Data not found"
            responseData.customErrorCode=409
            return res.status(409).send(responseData)
        }
    }
}

module.exports = new ServiceController()