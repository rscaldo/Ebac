const minhaFuncao = () => {
  console.log("Diz olá");
};
minhaFuncao();

const minhaFuncao2 = () => {
  return "Diz olá";
};
console.log(minhaFuncao2());

const minhaFuncao3 = () => "Diz olá";

console.log(minhaFuncao3());

const retornaUmCarro = () => {
  return {
    modelo: "ka",
    fabricante: "ford",
  };
};
console.log(retornaUmCarro());

const retornaUmCarro2 = () => ({
  modelo: "ka",
  fabricante: "ford",
});
console.log(retornaUmCarro2());

const carro = {
  velocidadeAtual: 40,
  acelerar: function () {
    this.velocidadeAtual += 10;
  },
  frear: () => {
    this.velocidadeAtual -= 10;
  },
};

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);
