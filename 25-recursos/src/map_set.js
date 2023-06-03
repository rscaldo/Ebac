let meuMap = new Map();
meuMap.set("nome", "Gian");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);
console.log(meuMap.has("nome"));

meuMap.set("stack", "html, css, js");

for (let chave of meuMap.keys()) {
  console.log(chave);
}

for (let valor of meuMap.values()) {
  console.log(valor);
}

for (let entrada of meuMap.entries()) {
  console.log(entrada);
}

//SET
const cpfs = new Set();

cpfs.add("27336581072");
cpfs.add("45011546080");
cpfs.add("16006978016");

console.log(cpfs);

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = [
  "Gian Souza",
  "Jose Paulo",
  "Maria Isabel",
  "Luana",
  "Luana",
  "Gian Souza",
];
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados);
