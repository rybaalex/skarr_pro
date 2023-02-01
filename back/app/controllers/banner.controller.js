const NavService = require('../services/nav.service')
const responseData= require("../config/response");

class NavController {
    getNavigation = async (res, db) => {
        const resultDB = await NavService.getNav(db);
        if (resultDB.length > 0) {
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

module.exports = new NavController()