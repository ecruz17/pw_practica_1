var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hola servidor!/n');
}).listen(8080, '127.0.0.1'); //se crea un servidor local, pero no regresa nada en la terminal

//al ingresar la dirección en el navegador se despliega una ventana con el texto "Hola servidor!"

//en las herramientas de desarrollador podemos ver las peticiones get que regresan el archivo con
//el texto plano que creamos, además al seleccionar alguna de las peticiones registradas podremos
//ver información como el tipo, estado de la conexión, tamaño y fecha de creación
