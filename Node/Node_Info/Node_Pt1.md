# Estudos sobre Node.js  Parte 1

---
Node.js é um interpretador Javascript do lado do servidor que altera a noção de como um servidor deveria funcionar. Seu objetivo é possibilitar que um programador crie apliativos altamente escalável, se escreva um código que manipule dezenas de milhares de conexões simultâneas.
---

### Como instalar o Node.js:

* Linux:
    * No terminal: sudo apt-get install node
    * escreva: export PATH=$PATH:/usr/local/nodejs/bin
    * usr e local serão o local onde esta a pasta nodejs

* MacOSX:
   * Instale homebrew no Mac
   * Abra um terminal e digite: brew install node
   * escreva: export PATH=$PATH:/usr/local/nodejs/bin
   * usr e local serão o local onde esta a pasta nodejs

* Windows:
   * Simplesmente baixe o windows installer no site do node
   * site do node: nodejs.org


### Testando pela primeira vez o sistema:

* Crie um arquivo em um editor de texto de sua preferencia
* Este arquivo deve possuir a extensão .js (de javascript)
* escreva o seguinte no arquivo:

```javascript
  /* Hello World para testar com Node.js*/
  console.log("Hello World! ")
```
* Salve o arquivo e feche
* Abra um terminal em seu computador
* escreva o seguinte: node nomearquivo.js
* nomearquivo é o nome que voce deu para seu arquivo
* Clique em enter
* se aparecer uma mensagem na tela, significa que esta funcionando.
