const RecommendationsService = require('../services/recommendations.service');
const responseData= require("../config/response");
class RecommendationsController {
    getRecommendations = async (res, db) => {
        const resultDB = await RecommendationsService.getRecommendations(db);
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

module.exports = new RecommendationsController()