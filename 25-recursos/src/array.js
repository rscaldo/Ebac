const redesSociais = ["Facebook", "instagram", "twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
});

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Frontend",
  };
  return itemAtual;
});

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});

console.log(dobroDosNumeros);
console.log(typeof dobroDosNumeros);

const dobroDosNumeros2 = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});

console.log(dobroDosNumeros2);

const paula = alunos2.find(function (item) {
  return item.nome == "Paula"; //true or false
});

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == "Paula"; //true or false
});
console.log(indiceDaPaula);

alunos2.push({
  nome: "lucio",
  curso: "Backend",
});

const todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === "Frontend";
});

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoWagner = alunos2.some(function (item) {
  return item.nome === "Wagner" && item.curso === "Frontend";
});

console.log(existeAlgumAlunoWagner);

function filtraAlunoDeBackend(aluno) {
  return aluno.curso === "Backend";
}

const alunoDeBackend = alunos2.filter(filtraAlunoDeBackend);
console.log(alunoDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);

console.log(soma);

const nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, "");
console.log(nomeDosAlunos);
