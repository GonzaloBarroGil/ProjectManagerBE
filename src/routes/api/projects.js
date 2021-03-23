const ProjectController = require('../../controllers/project');

module.exports = router => {
    router.get('/', ProjectController.getProjects);

    router.get('/:id', ProjectController.getProjectById);

    router.post('/', ProjectController.saveProject);

    return router;
};

