let alunos = [
  { nome: "João", nota: 8.5 },
  { nome: "Maria", nota: 5.5 },
  { nome: "Pedro", nota: 6 },
  { nome: "Rafael", nota: 3.5 },
  { nome: "Gian", nota: 8 },
  { nome: "Marta", nota: 9.7 },
];

function obterAlunosAprovados(alunos) {
  let alunosAprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
      alunosAprovados.push(alunos[i].nome);
    }
  }
  return alunosAprovados;
}

let aprovados = obterAlunosAprovados(alunos);

console.log(aprovados);
