const {Router} = require('express');
const requireDir = require('require-dir');
const forEach = require('lodash/forEach');

module.exports = function(router) {
    forEach(
        requireDir('.', {recurse: true}),
        (module, name) => {
            router.use(`/${name}`, module(Router()));
        }
    );

    return router;
};

