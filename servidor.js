// app.js
var hostname = '127.0.0.1';
var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.send('Hola Mundo!')
})

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
