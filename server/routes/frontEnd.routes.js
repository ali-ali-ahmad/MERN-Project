const FrontEndController = require ('../controllers/frontEnd.controller');
module.exports = function(app){
    app.post('/api/frontEnds', FrontEndController.createFrontEnd);
    app.get('/api/frontEnds', FrontEndController.getAllFrontEnd);
    app.get('/api/frontEnds/:id', FrontEndController.getFrontEnd);
    app.get('/api/frontEnds/:id/projects', FrontEndController.findProjectsByUser);
    app.put('/api/frontEnds/:id', FrontEndController.updateFrontEnd);
    app.delete('/api/frontEnds/:id', FrontEndController.deleteFrontEnd);
}



