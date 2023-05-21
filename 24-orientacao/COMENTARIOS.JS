/**
AULA 1 - INTRODUÇÃO

A PROGRAMAÇÃO ORIENTADA A OBJETOS ESTA CENTRADA EM 3 PILARES:
 - POLIMORFISMO > MUITAS FORMAS, REALIZAR A MESMA TAREFA DE DIFERENTES FORMASS

 - HERANÇA > COMPARTILHAR INFORMAÇÕES ENTRE OS OBJETOS

 - ENCAPSULAMENTO > PODEMOS CONTROLAR OS NIVEIS DE ACESSO A DETERMINADA INFORMAÇÃO


ABSTRAÇÕES
> VOCÊ SABE O QUE É UM CARRO, E CONSEGUE DIRIGIR ESSE CARRO SEM SABER COMO TODOS OS COMPONENTES FUNCIOMAM

METODO
> TODA AÇÃO QUE TEMOS DENTRO DE UMA ABSTRAÇÃO, EXEMPLO: EM UM CARRO SERIA ACELERAR, FREAR, TROCAR DE MARCHA

NO JS NOS TEMOS FUNÇÕES CONSTRUTORAS


HERANÇA
COMPUTADOR > DESKTOP OU NOTEBOOK (ELES HERDAM AS INFORMAÇÕES DO COMPUTADOR)

EXEMPLO: 
CLASSE: POKEMON
HERANÇA: PIKACHU
INSTANCIA: PIKACHU DO ASH


EXEMPLO:
CLASSE: VEICULO
HERANÇA: CARRO OU MOTO
HERANÇA: HB20 OU FAZER
INSTANCIA: HB20 DO JOAO

EXEMPLO:
ABSTRAÇÃO: PESSOA
ATRIBUTOS: NOME, IDENTIDADE, IDADE
INSTANCIA: RAFAEL



AULA 2 - CRIANDO OBJETOS

MANEIRA LITERAL
const carro = {propriedade/atributos}

const carro = {
  modelo: 'fiesta',
  fabricante: 'ford',
  ano: 2020
}

ESSE OBJETO PODE RECEBER UMA FUNÇÃO

const carro = {
  modelo: 'fiesta',
  fabricante: 'ford',
  ano: 2020
  acelera: function(){
    consolo.log('vrum')
  }
}

QUANDO EM UM OBJETO TEMOS UM ATRIBUTO QUE RECEBE UMA FUNÇÃO NOS CHAMAMOS ESSE ATRIBUTO DE METODO, PORTANTO NESSE OBJETO TEMOS OS ATRIBUTOS: modelo, fabricante, ano E TEMOS O METODO: acelerar



OUTRO METODO DE CRIAR OBJETOS NO JS É ATRAVEZ DAS FUNÇÃO CONTRUTORAS, E COLOCAMOS OS ATRIBUTOS COMO ARGUMENTOS DA FUNÇÃO, NO ENTANDO O METODO acelerar É COMPARTILHADO COM TODOS OS CARROS, PORTANTO COMO NÃO VAI SER DIFERENTE ENTRO OS DIFERENTES CARROS NOS NÃO PRECISAMOS PASSAR COMO ARGUMENTO

function Carro(modelo, fabricante, ano){
}

E COMO CRIAMOS UM ATRIBUTO DENTRO DE UMA FUNÇÃO CONTRUTORA?
UTILIZAMOS A PALAVRA RESERVADA this

  this.modelo = modelo; AQUI TEMOS QUE O ATRIBUTO modelo VAI SER IGUAL AO ARGUMENTO QUE RECEBEMOS DENTRO DA FUNÇÃO CONTRUTORA



function Carro(modelo, fabricante, ano){
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.ano = ano;
}

AGORA VAMOS CONTRUIR O METODO ACELERAR

function Carro(modelo, fabricante, ano){
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.ano = ano;
  this.acelerar = function(){
    console.log('vrum')
  }
}

AGORA COMO PODEMOS REALIZAR PARA UMA INSTÂNCIA UTILIZAR ESSA FUNÇÃO CONTRUTORA?

TEMOS QUE CHAMAR A FUNÇÃO CONTRUTORA QUE CRIAMOS ANTERIORMENTE Carro() COM A PALAVRA new NA FRENTE, COM O new TEMOS O RETORNO DO OBJETO QUE FOI CRIADO

const carroDoRafael = new Carro('fiesta', 'ford', 2019)

const carroDaMaria = new Carro('ka', 'ford', 2020)


AULA 3 - VERIFICAÇÃO DE TIPOS E INSTANCIAS
TYPEOF > RETORNA O TIPO DE DADO

POR PADRÃO O JS NÃO RECONHECE OS TIPOS DE DADOS QUE SÃO CONSTRUIDOS ATRAVES DAS FUNÇÕES CONSTRUTORAS E ACABA SEMPRE RETORNANDO UM OBJETO, PARA ISSO PRECISAMOS DE OUTRA PALAVRA RESERVADA

instanceof

EXEMPLO:
console.log(typeof CarroDaMaria) >> RETORNO object
console.log(CarroDaMaria instanceof Carro) >> AQUI ESTAMOS PERGUNTANDO SE O CarroDaMaria É UMA INSTANCIA DE Carro, O RETORNO VAI SER UM BOLLEANO

AULA 4 - ACESSANDO ATRIBUTOS DENTRO DE UM OBJETO

const carro = {
  modelo: 'fiesta',
  fabricante: 'ford',
  ano: 2020
  acelera: function(){
    consolo.log('vrum')
  }
}

PARA ACESSAR UM ATRIBUTO PODEMOS UTILIZAR O .
console.log(carro.modelo)

OU PODEMOS ACESSAR COM ['']
console.log(carro['modelo'])

PODEMOS ADICIONAR NOVOS ATRIBUTOS COM:
carro.cor = 'preto'

PORTANTO APESSAR DA CONST CARRO SER IMUTAVEL OS ATRIBUTOS DENTRO DELA SÃO MUTÁVEIS
PORTANTO PODEMOS ALTERAR OS ATRIBUTOS
carro.ano = 2019

PARA FAZER COM QUE ESSE OBJETO SEJAIMUTAVEL NOS TEMOS UMA FUNÇÃO QUE CONGELA O OBJETO
Object.freeze(carro)
SE A GENTE COLOCAR ESSE CÓDIGO ANTES DE TENTAR REALIZAR UMA ALTERAÇÃO AS ALTERAÇÕES NÃO VÃO TER EFEITOS SOBRE O OBJETO PORQUE ELE ESTÁ CONGELADO

PODEMOS UTILIZAR O if PARA VERIFICAR A EXISTENCIA DE UM ATRIBUTO

if (carro['fabricante']){
  console.log('Temos a informação do fabricante do carro')
}

NESTA CONDIÇÃO TEMOS QUE SE EXISTIR A INFORMAÇÃO DO FABRICANTE DO CARRO RETORNAMOS O CONSOLE.LOG

MAS PODEMOS TER ALGUNS PROBLEMAS PARA VERIFICAR SE O ATRIBUTO EXISTE QUANDO ELE TEM UM VALOR NULO OOU INDEFINIDO, PARA ISSO TEMOS UMA OUTRA FORMA DE VERIFICAÇÃO UTILIZANDO A PALAVRA REVERVADA in

if('fabricante' in carro){
  console.log('tem fabricante')
}


PODEMOS TRANSFORMAR OS ATRIBUTOS DE UM OBJETO EM UM ARRAY, PARA REALIZAR ISSO TEMOS QUE:
Object.keys(carro)

PARA SABER QUANTOS ATRIBUTOS TEMOS DENTRO DE UMM OBJETO TEMOS:
Object.keys(pessoa).length

PARA PEGAR OS VALORES DE UM ATRIBUTO E TRANSFORMAR EM ARRAY TEMOS:
Object.values(carro)


AULA 5 - HERANÇA

TEMOS O SEGUINTE OBJETO CRIADO POR UMA FUNÇÃO CONSTRUTORA

function Pessoa(nome){
  this.nome = nome;
  this.dizOi = function(){
    console.log(this.nome + " diz olá")
  }
}

APÓS ISSO TEMOS QUE DECLARA

const pessoa1 = new Pessoa('Maria')

TEMOS O SEGUINTE CÓDIGO

function Pessoa(nome) {
  this.nome = nome;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
}

function Funcionario(nome, cargo, salario) {
  this.nome = nome;
  this.cargo = cargo;
  this.salario = salario;
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1);


PARA EXECUTAR ESSE CÓDIGO NO NODE
node funcionario.js

AQUI O PROBLEMA É QUE A FUNÇÃO dizOi NÃO ESTÁ SENDO EXECUTADA NA FUNÇÃO FUNCIONARIO, ATÉ AGORA PARA ELA SER EXECUTADA TERIAMOS QUE REPETIR O CÓDIGO DENTRO DA FUNÇÃO:

function Funcionario(nome, cargo, salario) {
  this.nome = nome;
  this.cargo = cargo;
  this.salario = salario;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
}


PORTANTO TERIAMOS QUE REPEDIR CÓDIGO, E ISSO NÃO É UMA BOA PRATICA NA PROGRAMAÇÃO, PARA RESOLVERR ESSE PROBLEMA TEMOS A HERANÇA

PORTANTO TERIAMOS ALGUMA ALTERAÇÕES NO CÓDIGO:

function Pessoa(nome) {
  this.nome = nome;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
  this.dizCargo = function () {
    console.log(this.cargo);
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  this.salario = salario;
  Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
funcionario1.dizOi();

AQUI TEMOS A HERANÇA DAS FUNCÇÕES CRIADAS DENTRO DE PESSOA, PORTANTO MESMO QUE OS ATRIBUTOS NÃO ESTEJAM DENTRO DE funcionario ELES SÃO ACESSIVEIS POR CONTA DE: Pessoa.call(this, nome);


AULA 06 - ENCAPSULAMENTO

NO CÓDIGO ANTERIOR TEMOS UM PROBLEMA, QUALQUER UM PODE ALTERAR ALGUNS DADOS, POR EXEMPLO COLOCAR:
funcionario1.salario = 1000

ESSE É UM PROBLEMA DE ENCAPSULAMENTO, PORTANTO QQ PESSOA PODE ALTERAR, ESSE É UM PROBLEMA DE UMA LINGUAGEM ORIENTADA A OBJETOS, NO JS TEMOS APENAS OS DADOS PÚBLICOS E PRIVADOS
PARA UM ATRIBUTO SER PRIVADO NO JS NÃO PODEMOS USAR O this. TEMOS QUE CRIAR VARIÁVEIS

function Pessoa(nome) {
  this.nome = nome;
  this.dizOi = function () {
    console.log(this.nome + " diz olá");
  };
  this.dizCargo = function () {
    console.log(this.cargo);
  };
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  let _salario = salario;
  Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
funcionario1.dizOi();



PARA ACESSAR UM ATRIBUTO PRIVADO TEMOS:
this.retonaSalario = function(){
  return _salario;
}

console.log(funcionario1.retornaSalario())

COMO ATRIBUIR UM VALOR A UM DADO PRIVADO
this.atribuiSalario = function(valor){
  _salario = valor
}

funcionario1.atribuiSalario(7000)

AULA 7 - POLIMORFISMO
A CAPACIDADE DE EXECUTAR DE FORMAS DIFERENTES A MESMA TAREFA

this.aumento = function(){
  const novoSalario = _salario * 1.1;
  console.log(novoSalario)
  _salario = novoSalario
}

funcionario1.aumento()
console.log(funcionario1.getSalario())
 */
