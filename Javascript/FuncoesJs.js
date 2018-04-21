/* Arquivo de Funções do Javascript */

/* a Função Prompt: */

//construção da função prompt:

/*

 Prompt serve para que o usuário possa entrar com um valor
 dentro do Javascript que possa ser imprimido na tela


  variavel = prompt(titulo,default);

  titulo: é o texto que irá ser apresentado para o usuario
  default: como se fosse um valor inicial de exemplo do input

*/

let idade = prompt('Qual a sua Idade? ',100);
alert('Você possui ${idade} anos!'); //saida

/* a Função confirm */

/*
 A função confirm serve para retornar um valor booleano
 dependendo da escolha do usuario:
   se o usuario clicar em OK irá retornar um true
   se o usuario clicar em Cancel ira retornar um false
*/

let retorno = confirm("Você esta bem? ");
if(retorno){
  alert('Que bom que você está bem!');
}
