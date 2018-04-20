var http = require("http");
http.createServer(function(request,response){

  response.writeHead(200,{'Content-Type':'text/plain'});
     //mensagem de saida no servidor
     response.end('Hello World!');

}).listen(8081); //localização no localhost.
//mensagem para finalizar
console.log('Servidor criado em localhost:8081');
console.log('Coloque no chrome: 127.0.0.1:8081');
console.log('Para Sair, selecione Ctrl + C para encerrar...');
