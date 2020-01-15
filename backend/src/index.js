const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-cnhhv.mongodb.net/<db>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);


/*
Métodos HTTP: GET, POST, PUT, DELETE

TIPOS DE PARÂMETROS
QUERY PARAMS => REQUEST.QUERY(FILTROS, ORDENAÇÃO, PAGINAÇÃO, ...) 
ROUTE PARAMS => REQUEST.PARAMS(IDENTIFICAR UM RECURSO NA ALTERAÇÃO OU REMOÇÃO)
BODY => REQUEST.BODY(DADOS PARA CRIAÇÃO OU ALTERAÇÃO DE UM REGISTRO)
*/