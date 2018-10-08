# Estudos dirigidos sobre Angular

* Angular é uma Framework em Javascript criado pelo google
* Angular serve para fazer Aplicações Web,Desktop e Mobile
* Angular segue o modelo Single Page Applications
	* Single Page Applications: é uma forma de pedido ao servidor onde de vez de pedir que atualize a pagina toda, ele atualiza uma parte especifica da pagina onde o usuário está mexendo

### Como usar o Angular para diferentes tipos de funções

* Usando o Angular para aplicações Web: somente o Angular é necessário
* Usando o Angular para aplicações Desktop:
	* Electron(github) + Angular
* Usando o Angular para aplicações Mobile:
	* Ionic + Angular

### Linguagens que podem ser usadas no Angular:
* Typescript(Linguagem da Mycrosoft)
* Dart(Linguagem do Google)
* Javascript


### As quatro ideias principais de Angular
1) Componentes
2) Rotas
3) Diretivas
4) Serviços


* Componentes

Aplicações em Angular na verdade são um composição de vários componentes, organizados na tela

Componentes são basicamente uma classe Typescript(ou em javascript) e um template em HTML que são responsáveis por uma parte da tela.

O Angular começa com um componente raiz e vai sendo colocado outros componentes usando a raiz

* Diretivas

As diretivas são usadas para alterar o DOM, estendedo as funcionalidades de um elemento

Um componente é uma diretiva que contém um template HTML
	ex: Um campo de busca ao ser clicado

Uma diretiva no Angular nada mais é do que uma classe no HTML, deve ser informado no elemento da diretiva o nome da diretiva

ex: <input type = "text" busca/>

Angular possui dois tipos de diretivas:

- Diretivas Estruturais:
	* São diretivas que alteram o layout através da adição,remoção ou substituição de elementos na tela
	* ex: Ngif e NgFor

- Diretivas de Atributos:
	* São diretivas que alteram o comportamento ou aparência apenas do elemento no qual ela foi declarada.
	* ex: NgModel

* Serviços

Encapsula toda a lógica que pode não estar diretamente envolvida com a parte visual das telas
	* ex: serviço de logging, acesso a API, etc...

* Rotas

Responsável pela navegação entre as views de uma aplicação
