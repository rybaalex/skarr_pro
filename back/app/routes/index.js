const navRoutes = require('./nav.routes');
const bannerRoutes = require('./banner.routes');
const serviceRoutes = require('./service.routes');
const recommendationsRoutes = require('./recommendations.routes');
module.exports = function (app, db) {
    navRoutes(app, db);
    bannerRoutes(app, db);
    serviceRoutes(app, db);
    recommendationsRoutes(app, db)
    // Тут, позже, будут и другие обработчики маршрутов
};