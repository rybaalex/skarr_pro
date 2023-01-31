const NavController = require('../controllers/nav.controller');
const nav_name = "/api/v1/nav"
module.exports = function (app, db) {
    app.post(nav_name, (req, res) => {
        const note = {
            url: req.body.alias,
            title: req.body.title,
            children: req.body.children,
            visible: req.body.visible,
            sort: req.body.sort
        };
        db.collection("nav").insertOne(note, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result);
            }
        });
    });

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
    app.get(nav_name, (req, res) => {
        NavController.getNavigation(res, db).then();
    })
};