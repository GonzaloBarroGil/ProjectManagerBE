const {Router} = require('express');
const {errorHandler} = require('./middleWares');

class Routes {
    static configure(app) {
        app.use('/api', require('./api')(Router()));
        app.use(errorHandler);
    }
}

module.exports = Routes;
