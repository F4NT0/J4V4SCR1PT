/* como Criar operações: */

/*
 Como declarar funções:

 -> utilizamos a palavra function primeiro
 -> colocamos o nome da função desejada
 -> decidimos se a função necessita de parametros:
     * () se não precisar
     * (pr1,pr2) precisa de dois parametros

 -> abre e fecha chaves
 -> Dentro das chaves se coloca o que queremos que
a função deve fazer

 -> para chamar a função é só colocar o nome da função
*/

function nomeFuncao(){
  alert('Saida de texto!');
}

nomeFuncao(); //inicia a função na saída

/*
 Variaveis em funções:

 se criar uma variavel dentro de uma função ele só
 funciona dentro da função

 se criar uma variavel fora da função, voce pode
 chamar ela dentro
*/

let var1 = 'variavel 1 criada'; //variavel criada fora

function usando(){
  let mensagem = 'fora da funcao ' + var1;
  alert(mensagem);
}

usando();

/*Criando funções com Parametros */

function testando(nome,numero){
  alert(nome + 'Tem' + numero);
}

testando('Gabriel',21);


let nome = 'pedro';
let numero = 32;

testando(nome,numero);

/*Retornando valores */

function soma(a,b){
  return a + b;
}

function sub(a,b){
  if(a > b){
  return a - b;
}else{
  return b - a;
}
}

function mult(a,b){
  return a * b;
}

function div(a,b){
  if(a < b){
    return b / a ;
  }else{
    return a / b;
   }
}

let subTeste = sub(3,5);
let subDiv = div(3,6);

alert(subTeste);
alert(subDiv);
