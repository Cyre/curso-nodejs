/**
 * Aqui se alojan las funciones que que se van a usar para las rutas
 * 
 */

'use strict'

// No se puede definir como funcion flecha
function prueba(request, response) { 
	
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
}

// Se hace de esta forma porque en un futuro se exportaran mas funciones
module.exports = {
	prueba
}