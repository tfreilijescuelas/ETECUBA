// Importamos la libreria de express
var express = require('express');

// Creamos el servidor
var server = express();

server.use(express.static('www'));

server.listen(8080);