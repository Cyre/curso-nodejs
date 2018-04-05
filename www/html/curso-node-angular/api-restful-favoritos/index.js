'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Uso de rutas.
// Utiliza el metodo get de http
app.get('/prueba/:nombre?', function(request, response) {
	//                   ^<-- Indica que el parametro es opcional
	//Primer parametro de la funcion es el request
	//Segundo parametro es la respuesta de la funcion
	
	if (request.params.nombre) {
		var nombre = request.params.nombre;
	} else {
		var nombre = "SIN NOMBRE";
	}
	response.status(200).send({
		data: [2,3,4],
		texto: "Hola Mundo con NodeJS y EXPRESS. " + nombre,
		});
});


app.listen(port, function(){
	console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);	
});
