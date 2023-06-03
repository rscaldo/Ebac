function somar(a, b) {
  return a + b;
}

console.log(somar(10, 20));

function somar2() {
  console.log(arguments);
}
console.log(somar2(10, 20));

function somar3() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}

console.log(somar3(10, 30, 33));

function somarComRest(...numeros) {
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}

console.log(somarComRest(10, 20, 31));

//SPREAD

const numeros2 = [1, 2, 3, 4];
console.log(...numeros2);

const timesDeFutebolSp = ["santos", "palmeiras", "bragantino", "são paulo"];
const timesDeFutebolRio = ["vasco", "botafogo", "flamengo", "fluminense"];

//UTILIZANDO O concat
const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRio);

console.log(timesDeFutebol);

//UTILIZANDO O OPERADOR spread
const timesDeFutebol2 = [...timesDeFutebolSp, ...timesDeFutebolRio];
console.log(timesDeFutebol2);

//UTILIZANDO spread PARA CONSTRUIR OBJETOS
const carroDaJulia = {
  modelo: "gol",
  marca: "vw",
  motor: 1.6,
};

const carroDaAna = {
  ...carroDaJulia,
  motor: 1.8,
};

console.log(carroDaJulia);
console.log(carroDaAna);

//DESESTRUTURAÇÃO DE OBJETOS
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

//DESESTRUTURAÇÃO DE ARRAYS
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);

//
