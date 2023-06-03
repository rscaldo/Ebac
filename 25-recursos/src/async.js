function funcaoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 100000000; i++) {
    execucoes++;
  }
  return execucoes;
}

console.log("inicio");
console.log(funcaoPesada());
console.log("fim");

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na iteração dos numeros");
  }
});

console.log("inicio2");
funcaoMuitoPesadaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
console.log("fim");

async function execucaoPrincipal() {
  console.log("inicio3");
  await funcaoMuitoPesadaPromise
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));
  console.log("fim3");
}

execucaoPrincipal();

async function execucaoPrincipal2() {
  console.log("inicio4");
  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log(e);
  }
  console.log("fim4");
}

execucaoPrincipal2();
