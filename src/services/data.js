const fs = require('fs');

class DataService {
    static getProjects() {
        const database = fs.readFileSync(process.env.DB, 'utf-8');
        return JSON.parse(database);
    }

    static saveProjects(database) {
        return fs.writeFileSync(process.env.DB, JSON.stringify(database), 'utf-8');
    }
}

module.exports = DataService;
