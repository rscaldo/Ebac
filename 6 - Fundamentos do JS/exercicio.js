function calculaArea(base, altura) {
  let area = base * altura;
  return area;
}

console.log(calculaArea(10, 20));

alert("Vamos calcular a area!");
let base2 = Number(prompt("Digite a base: "));
let altura2 = Number(prompt("Digite a altura: "));

function calcularArea2(base, altura) {
  let area2 = base2 * altura2;
  return area2;
}

alert("A area é de :" + calcularArea2());
