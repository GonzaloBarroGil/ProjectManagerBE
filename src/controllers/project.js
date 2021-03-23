const DataService = require('../services/data');

class ProjectController {
    static async getProjects(req, res, next) {
        try {
            const {projects, people} = await DataService.getProjects();
            const {terms} = req.query;
            const requiredProjects = terms
                ? projects.filter(project => project.name.toLowerCase().includes(terms.toLowerCase()))
                : projects;
            res.send({projects: requiredProjects, people});
        } catch (err) {
            next(err);
        }
    }

    static async getProjectById(req, res, next) {
        try {
            const {projects} = await DataService.getProjects();
            const project = projects.find(project => project.id === Number(req.params.id));
            res.send(project);
        } catch (err) {
            next(err);
        }
    }

    static async saveProject(req, res, next) {
        try {
            const data = await DataService.getProjects();
            const ids = data.projects.map(project => project.id);
            const id = Math.max(...ids) + 1;
            const newId = {id};
            const newProject = {...newId, ...req.body.project};
            const projects = data.projects.filter(project => project.id !== newProject.id);
            projects.push(newProject);
            await DataService.saveProjects({projects, people: data.people});
            res.sendStatus(200);
        } catch (err) {
            next(err);
        }
        
    }
}

module.exports = ProjectController;

