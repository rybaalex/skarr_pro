const RecommendationsController = require('../controllers/recommendations.controller');
const router_name = "/api/v1/recommendations"
module.exports = function (app, db) {
    /**
     * @swagger
     * /recommendations:
     *   get:
     *     summary: получение данных для блока в модальном окне брифинге Откуда о нас узнали
     *     responses:
     *         '200':    # status code
     *           description:
     *           content:
     *             application/json:
     *               schema:
     *                 type: object
     *                 items:
     *
     */
    app.get(router_name, (req, res) => {
        RecommendationsController.getRecommendations(res, db).then();
    })
};