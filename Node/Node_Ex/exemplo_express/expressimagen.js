//arquivo de exemplo usando express para trazer uma imagem

//iniciando o express no arquivo:
var express = require('express');

//copiando o método express:
app = express();

//conectar a imagem com o arquivo
app.use(express.static(__dirname + '/imagens'));
console.log(__dirname);

//porta onde foi colocado
app.listen(1234);
console.log('colocar no browser: 127.0.0.1:1234');
