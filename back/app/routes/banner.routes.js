const BannerController = require('../controllers/banner.controller');
const router_name = "/api/v1/banner"
module.exports = function (app, db) {
    /**
     * @swagger
     * /banner:
     *   get:
     *     summary: Получение данных о банерах на главной странице
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
        BannerController.getBanner(res, db).then();
    })
};