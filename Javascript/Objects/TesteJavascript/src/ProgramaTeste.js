//criando uma função construtora:
function calculos(valor1,valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.getValor1 = getV1;
    this.getValor2 = getV2;
    this.soma = sum;
    this.subtracao = sub;
    this.multiplicacao = mult;
    this.divisao = div;
    this.restoDivisao = rest;
}
function getV1(){
    return this.valor1;
}
function getV2(){
    return this.valor2;
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
document.write(novo.getValor1());
document.write("\n" +  novo.getValor2());
document.write("\n" + novo.soma());
document.write("\n" + novo.subtracao());
document.write("\n" + novo.multiplicacao());
document.write("\n" + novo.divisao());
document.write("\n" + novo.restoDivisao());
