const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const Router = require('./routes');
const packageJson = require('../package.json');
const {PORT} = process.env;

class App {
    constructor() {
        this.app = express();
    }

    _onListening() {
	    console.log(`App ${packageJson.name} running at port ${PORT}`);
    }

    _onError(err) {
	    console.log(`App ${packageJson.name} crashed - Error: ${err.errorMessage}`);
	    process.exit;
    }

    _database() {
        this.app.database = JSON.parse(fs.readFileSync(process.env.DB, 'utf-8'));
    }

    _routes() {
	    Router.configure(this.app);
    }

    _middleWares() {
        this.app.use(bodyParser.json({}));
        this.app.use(bodyParser.urlencoded({}));
        this.app.use(cors({
            credentials: true,
            origin: /^http:\/\/localhost/
        }));
    }

    _configure() {
        this._middleWares();
        this._database();
        return this._routes();
    }

    async init() {
        await this._configure();
        this.app.listen(PORT, this._onListening);
        this.app.on('error', this._onError);
        return this.app;
    }
}

module.exports = App;
