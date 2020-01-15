const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/users/', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Deu certo!'});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);


module.exports = routes;