//criando uma função construtora:
function calculos(valor1,valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.soma = sum;
    this.subtracao = sub;
    this.multiplicacao = mult;
    this.divisao = div;
    this.restoDivisao = rest;
}

function sum(){
    return this.valor1 + this.valor2;
}
function sub(){
    return this.valor1 - this.valor2;
}
function mult(){
    return this.valor1 * this.valor2;
}
function div(){
    if(this.valor1 > this.valor2){
        return this.valor2 / this.valor1;
    }
    else{
        return this.valor1 / this.valor2;
    }
}
function rest(){
    if(this.valor1 > this.valor2){
        return this.valor2 % this.valor1;
    }
    else{
        return this.valor1 % this.valor2;
    }
}

//iniciando o objeto:

let valor1 = 8;
let valor2 = 7;
let novo = new calculos(valor1,valor2);
document.write("\n" + novo.soma());
document.write("\n" + novo.subtracao());
document.write("\n" + novo.multiplicacao());
document.write("\n" + novo.divisao());
document.write("\n" + novo.restoDivisao());
