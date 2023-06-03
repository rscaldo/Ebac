"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  console.log("Diz olá");
};
minhaFuncao();
var minhaFuncao2 = function minhaFuncao2() {
  return "Diz olá";
};
console.log(minhaFuncao2());
var minhaFuncao3 = function minhaFuncao3() {
  return "Diz olá";
};
console.log(minhaFuncao3());
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "ka",
    fabricante: "ford"
  };
};
console.log(retornaUmCarro());
var retornaUmCarro2 = function retornaUmCarro2() {
  return {
    modelo: "ka",
    fabricante: "ford"
  };
};
console.log(retornaUmCarro2());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);