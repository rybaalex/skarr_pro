const navRoutes = require('./nav.routes');
const bannerRoutes = require('./banner.routes');
module.exports = function (app, db) {
    navRoutes(app, db);
    bannerRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};