const navRoutes = require('./nav.routes');
module.exports = function(app, db) {
    navRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};