const http = require('http');

http.createServer((req, res) => {

    // res.write('hola mundo');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Ricardo',
        apellido: ' Parare',
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log("escuchando el puerto 8080");