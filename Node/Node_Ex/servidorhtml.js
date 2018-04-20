//criando um exemplo usando html para o servidor

//chamando o require() com o módulo http
var http = require('http');

//criando o servidor
http.createServer(function(req,res){
//res é nosso response, que entrega a resposta
 //no writeHead() mudamos o tipo de conteudo, o charset serve para aceitar
 //acentos do tipo brasileiro tambem.
  res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
  // o metodo .write() serve para escrever no response
  // pode se usar quantos .write() quiser,mas o ultimo deve ser .en()
  res.write('<h1>Titulo de teste no servidor</h1>');
  res.write('<p> Isto é um parágrafo de teste </p>');
  res.end('<p>Exemplo de E-mail: fulano@gmail.com </p>');
}).listen(9999);

console.log('Servidor iniciado na porta 9999');
console.log('Coloque 127.0.0.1:9999 no google chrome');
console.log('Para encerrar, clique em Ctrl + C...');
