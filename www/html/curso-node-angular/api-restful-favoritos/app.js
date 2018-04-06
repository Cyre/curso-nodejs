/**
 * Aqui va la configuracion de express y de las rutas
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api);


// Necesitamos exportar el fichero como modulo para poder importarlo en otro fichero
module.exports = app; 