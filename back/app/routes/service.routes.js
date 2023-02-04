const ServiceController = require('../controllers/service.controller');
const router_name = "/api/v1/service"
module.exports = function (app, db) {
    /**
     * @swagger
     * /banner:
     *   get:
     *     summary: получение данных для блока сервисы на главной странице фильтрует по published=true
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
        ServiceController.getService(res, db).then();
    })
};