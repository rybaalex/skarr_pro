const NavController = require('../controllers/nav.controller');
const router_name = "/api/v1/nav"
module.exports = function (app, db) {

    /**
     * @swagger
     * /navigation:
     *   get:
     *     summary: Получение всех пунктов меню
     *     responses:
     *         '200':    # status code
     *           description: Получение массива с пунктами меню
     *           content:
     *             application/json:
     *               schema:
     *                 type: object
     *                 items:
     *
     */
    app.get(router_name, (req, res) => {
        NavController.getNavigation(res, db).then();
    })
};