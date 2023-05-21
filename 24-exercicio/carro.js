//EXERCICIO
function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Veiculo.prototype.ligar = function () {
  console.log(`O veículo ${this.marca} ${this.modelo} foi ligado.`);
};

Veiculo.prototype.desligar = function () {
  console.log(`O veículo ${this.marca} ${this.modelo} foi desligado.`);
};

function Carro(marca, modelo, cor) {
  Veiculo.call(this, marca, modelo);
  this.cor = cor;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.ligarFarol = function () {
  console.log(`O carro ${this.marca} ${this.modelo} ligou o farol.`);
};

function Moto(marca, modelo, cilindradas) {
  Veiculo.call(this, marca, modelo);
  this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.ligarBuzina = function () {
  console.log(`A moto ${this.marca} ${this.modelo} ligou a buzina.`);
};

const meuCarro = new Carro("Honda", "Civic", "Prata");
meuCarro.ligar();
meuCarro.ligarFarol();

const minhaMoto = new Moto("Yamaha", "MT-07", 700);
minhaMoto.ligar();
minhaMoto.ligarBuzina();
