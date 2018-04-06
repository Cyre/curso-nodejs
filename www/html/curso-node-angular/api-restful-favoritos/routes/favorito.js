/**
 * Fichero donde se crean las rutas usando las funciones del controlador
 */

'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router(); // Cargamos el router de express

// Uso de rutas.
// Utiliza el metodo get de http
							// Equivalente a function(request, response)
api.get('/prueba/:nombre?', FavoritoController.prueba);
	//                  ^<-- Indica que el parametro es opcional


module.exports = api;