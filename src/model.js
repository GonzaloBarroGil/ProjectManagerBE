const fs = require('fs');

const database = fs.readFileSync(process.env.DB, 'utf-8');

class Model {
    constructor() {
        this.database = JSON.parse(database);
    }

    static getProjects() {
        return this.database.projects;
    }

    static searcProjects(terms = '') {
        return this.database.projects.filter(project => !terms || project.name.includes(term));
    }
}


module.exports = () => new Model();