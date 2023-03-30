//PODEMOS COMEÇAR AS DINHAS POR document. NÃO PRECISA COLOCAR O window.document
console.log(document.getElementsByTagName("input"));

console.log(document.getElementById("btn-depositar"));

console.log(
  document.getElementsByTagName("form")[0].getElementsByTagName("button")
);

console.log(document.getElementsByClassName("container"));

//FORMA MAIS AVANCADA DE REALIZAR A SELEÇÃO DE ELEMENTOS
//document.querySelector()
console.log(document.querySelector("button"));

console.log(document.querySelector("input[type=number]"));

//O querySelector SELECIONA O PRIMEIRO ELEMENTO
//TEMOS OUTRA OOPÇÃO QUE SE CHAMA querySelectorAll

console.log(document.querySelectorAll("input[type=number]"));

console.log(document.querySelectorAll("input#numero-conta"));

console.log(document.querySelectorAll("h2"));

//IMPORTANTE > DEVEMOS REALIZAR A SELEÇÃO DENTRO DE UM if, COM ISSO JÁ GARANTIMOS A EXISTENCIA DAQUELE ELEMENTO

if (console.log(document.querySelector("h3"))) {
  console.log("existe");
} else {
  console.log("nao existe");
}

//PARA SELECIONAR A TAG body RETORNA TODO HTML
console.log(document.body);
console.log(document.head);
