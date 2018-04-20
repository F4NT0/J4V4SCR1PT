//chamando uma imagem para dentro do site

var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type' : 'image/gif'});
  res.write('Imagem abaixo:');
  res.end(gifzinho, 'gifzinho');
}).listen(1234);

console.log('coloque no chrome: 127.0.0.1:1234');
console.log('Ctrl + C para encerrar');
