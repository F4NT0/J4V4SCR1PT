#  Estudos sobre Node.js Parte 2

###   Antes de Começar...
* Antes de criar uma aplicação, vamos ver seus componentes:
    * **require** : é usado para importar os módulos de Node.js
    * **Criando um servidor** : se cria um servidor que entenda os pedidos do cliente.
    * **Leia o pedido e retorna uma resposta** : ele vai ler o pedido criado pelo cliente(no browser ou console) e entregará uma resposta.

### Criando uma Aplicação no Node.js:

* Passo 1: Importando os módulos requeridos
    * utilizamos o **require** para isso:

 ```javascript
  var http = require("http");
 ```

 * Passo 2: Criando um servidor
    1. iremos criar uma instancia http e chamar o metodo createServer()
    2. iremos conectar esse servidor na porta 8081 do localhost.

    ```javascript
       var http = require("http");
       http.createServer(function(request,response){

       }).listen(8081);
    ```
    3. agora podemos fazer coisas interessantes, como utilizar o response para poder escrever e poder ter uma saida no programa.
       * writeHead() é usado para poder escrever no programa

    ```javascript
       var http = require("http");
       http.createServer(function(request,response){
            //utilizando o writeHead
            // writeHead(http status, tipo de conteudo);
            // http status : 200 significa tudo OK
            // tipo de conteudo é text/plain
            response.writeHead(200,{'Content-Type': 'text/plain'});

       }).listen(8081);
    ```

   4. para escrever uma mensagem na tela, utiliza-se o método end() para se ter uma saida de texto, utiliza-se por ultimo,depois disso o console.log(); para se ter uma mensagem de finalização do arquivo.

   ```javascript
     var http = require("http");
     http.createServer(function(request,response){

       response.writeHead(200,{'Content-Type':'text/plain'});
          //mensagem de saida no servidor
          response.end('Mensagem de Saída');

     }).listen(8081);
     //mensagem para finalizar
     console.log('Servidor criado em localhost:8081')
     console.log('Para Sair, selecione Ctrl + C para encerrar...');

   ```
  5. Para testar seu programa:
       * saiba qual é o seu localhost, no meu caso é 127.0.0.1
       * saiba qual é a porta do localhost, no meu caso é 8081.
       * Parte 1)
           * Abra pelo terminal onde está o programa
           * escreva: node nomedoarquivo.js
           * o node vai ficar rodando o programa

      * Parte 2)
           * Abra o google chrome
           * Coloque o localhost : porta usada
           * no meu caso: 127.0.0.1:8081
           * tem que aparecer a mensagem colocada no arquivo no browser.             
