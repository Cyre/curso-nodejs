/**
 * Aqui va el servidor
 */
 
'use strict' // <-- Se hace para poder usar las nuevas funcionalidades del estandar de js

var app = require('./app');
var port = process.env.PORT || 3678;

app.listen(port, function(){
	console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);	
});