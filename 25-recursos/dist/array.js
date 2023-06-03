"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var redesSociais = ["Facebook", "instagram", "twitter"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Frontend"
  };
  return itemAtual;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumeros);
console.log(_typeof(dobroDosNumeros));
var dobroDosNumeros2 = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros2);
var paula = alunos2.find(function (item) {
  return item.nome == "Paula"; //true or false
});

console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paula"; //true or false
});

console.log(indiceDaPaula);
alunos2.push({
  nome: "lucio",
  curso: "Backend"
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === "Frontend";
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoWagner = alunos2.some(function (item) {
  return item.nome === "Wagner" && item.curso === "Frontend";
});
console.log(existeAlgumAlunoWagner);
function filtraAlunoDeBackend(aluno) {
  return aluno.curso === "Backend";
}
var alunoDeBackend = alunos2.filter(filtraAlunoDeBackend);
console.log(alunoDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, "");
console.log(nomeDosAlunos);