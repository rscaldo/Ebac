/**
 * 
 * SINTAXE
 * 
 Case sensitive > Discrimina o uso de maiusculo e minusculo

 console.log > conseguimos enviar msgs para a aba de console no devtools

 console.error > Para enviar msg de erro para o console

 console.warn > Mensagem de alerta

 console.info > Mensagem de informação

 alert('Ola mundo') > popup mensagem

 COMENTÁRIOS NO JS
 // > comentário na mesma linha
 /** 
  
conmentário em bloco

 */

//VARIÁVEIS E CONSTANTES
/**
 * 
 let nome = "gian" > DECLARAÇÃO DE VARIAVEL
 nome

 PODEMOS ALTERAR O VALOR DE UMA VARIAVEL AO LONGO DO PROGRAMA

 nome = "maria"

 REGRAS DE DECLARAÇÃO DE VARIAVEL
 > NÃO PODE COMEÇAR COM NUMERO
 > NÃO PODE ESPAÇO
 > NÃO PODE TRAÇO
 > NÃO PODE ! #

 MAS PODE ALGUMAS OUTRAS
 > PODE _ UNDERLINE
 > A FORMA MAIS COMUM É INICIAR A SEGUGNDA PALAVRA COM A LETRA MAIUSCULA


 let variavel
 > PODEMOS CRIAR UMA VARIAVEL SEM ATRIBUIR SEU VALOR, ELA RECBE O VALOR DE undefined E DEPOIS PODEMOS ATRIBUIR O VALOR
 variavel = "rafael"

 CONSTANTES
 const pi = 3.14
 UMA CONSTANTE NÃO PODE TER SEU VALOR ALTERADO DEPOIS QUE ELA FOI DECLARADA, E TEMOS QUE ATRIBUIR O VALOR NA SUA CRIAÇÃO

 VAR

 var nomeCompleto = "Maria Silva"
>UMA MANEIRA ANTIGA DE DECLARA A VARIAVEL

 * 
 */

//TIPOS DE DADOS
/**
 * 
 STRING > TEXTOS E CARACTERES, PODE SER DECLARADA COM AS ASPAS DUPLAS OU SIMPLES

let primeironome = "Gian"
typeof primeironome >PARA SABER O TIPO DA VARIAVEL
"string"

PODEMOS CONCATENAR AS STRINGS

l

 */
let primeiroNome = "Gian";
let sobrenome = "Silva";
primeiroNome + " " + sobrenome;
`${primeiroNome} ${sobrenome}`;

//CONTAR A QUANTIDADE DE CARACTERES DE UMA STRING
primeiroNome.length;
console.log(primeiroNome.length);

//FATIAR STRING
primeiroNome.slice(0, 2);
//AQUI COMEÇA DA POSIÇÃO 0 E TERMINA NA POSIÇÃO 2, PORTANTO NÃO INCLUI A POSIÇÃO 2

console.log(primeiroNome.slice(0, 2));

//PROCURAR DENTRO DE UMA STRING
console.log(primeiroNome.search("a"));
//RETORNO VAI SER 2, POIS A LETRA a ESTA NA POSIÇÃO 2, NA PROGRAMAÇÃO COMEÇAMOS A CONTAR DO ZERO

//TIPOS LOGICOS OU BOOLEANOS
//TEM 2 VALORES true OU false

//NUMEROS > NO JS NÃO TEM DIFERENÇA ENTRE NUMEROS INTEIROS E FRACIONADOS PORTANTO QUANDO DAMOS UM typeof  EM UMA VARIAVEL QUE CONTEM NUMERO SEMPRE O RETORNO VAI SER number  MAS PODEMOS VERIFICAR SE UM NUMERO É INTEIRO COM O COMANDO

let altura = 1.8;
console.log(typeof altura);
console.log(Number.isInteger(altura)); //VAI VERIFICAR SE O NUMERO É INTEIRO

//PODEMOS CONVERTER UMA STRING PARA UM TIPO NUMERICO
let peso = "88.4";
console.log(peso);
console.log(typeof peso);
//COMO FOI DECLARADA COMO STRING NÃO É UM NUMERO TEMOS QUE CONVERTER
console.log(Number(peso));
//AGORA É UM NUMERO POIS TEM COM DIFERENTE NO CONSOLE DO DEVTOOLS
//PODEMOS CONVERTER ESSE NUMERO EM INTEIRO
console.log(parseInt(peso));

//NaN > NOT A NUMBER

//ARRAY > CONJUNTO DE DADOS

let tecnologiasWeb = ["HTML", "CSS", "JAVASCRIPT"];
console.log(tecnologiasWeb);
console.log(tecnologiasWeb[2]);

//PARA ADICIONAR UMA ITEM A UM ARRAY UTILIZAMOS O COMANDO push
tecnologiasWeb.push("Jquery");
console.log(tecnologiasWeb);
console.log(typeof tecnologiasWeb);
//O RETORNO VAI SER UM OBJECT POIS O ARRAY NÃO É NATIVO DO JS, E TUDO NO JS É UM OBJETO, E PODEMOS COLOCAR NUMEROS TAMBEM
tecnologiasWeb.push(3);
console.log(tecnologiasWeb);

//LAÇOS EM JS
//CRIAMOS UM ARRAY
let nomes2 = ["maria", "joao", "rafael"];
//PODEMOS ACESSAR UM DADO ESPECIFICO DO ARRAY COM
console.log(nomes2);
console.log(nomes2[2]);

//MAS TEMOS UM PROBLEMA SE O ARRAY CONTER MUITAS VARIAVEIS, OU SE A GENTE NÃO CONHECER O TAMANHO DO ARRAY, E PARA ESSES CASOS EXISTEM OS LAÇOS
//NO JS NOS TEMOS ALGUNS TIPOS DE LAÇO
//LAÇO for > for (let i =0), CHAMAMOS A POSIÇÃO ATUAL DE i E ESSE LAÇO DEVE SER EXECUTADO ATÉ TERMINAR O TAMAHO DO ARRAY PORTANTO > for (let i=0; i <nomes2.length);
//COM ISSO O LAÇO VAI SER EXECUTADO ATÉ TERMINAR O TAMANHO DE VARIAVEIS DO MEU ARRAY
//O VALOR DE i DEVE SER INCREMENTADO POIS ELE É UM CONTADOR DO LAÇO > for (let i=0; i < nomes2.length; i++)

for (let i = 0; i < nomes2.length; i++) {
  console.log("o nome é " + nomes2[i]);
}

//COM ESSE COMANDO O LAÇO for VAI SER EXECUTADO ENQUANTO O i FOR MENOR QUE nomes2.length E PARA CADA VARIAVEL DENTRO DO MEU ARRAY ELE VAI EXECULTAR O COMANDO

// LAÇO for in
//OUTRA FORMA DE ESCREVER O CODIGO ACIMA MAS COM MENOS CÓDIGO
for (indiceAtual in nomes2) {
  console.log("O nome é >>" + nomes2[indiceAtual]);
}

//LAÇO while
//OUTRA FORMA DE ESCREVER O CODIGO
let saudacoes = 0;
while (saudacoes < nomes2.length) {
  console.log("o nome é: " + nomes2[saudacoes]);
  saudacoes++;
}

//LAÇO do while > UMA VARIAÇÃO DE SINTAXE DO while
//ANTES VAMOS ZERAR NOSSA VARIAVEL SAUDACOES
saudacoes = 0;
do {
  console.log("o nome é:> " + nomes2[saudacoes]);
  saudacoes++;
} while (saudacoes < nomes2.length);

//CONDICIONAIS
let idade = prompt("Digite a sua idade: "); //CRIAMOS UMA VARIAVEL QUE VAI SER ALIMENTADA PELO USUARIO
idade = parseInt(idade); //COMO O QUE FOI DIGITADO PELO USUARIO VEM COMO STRING TEMOS QUE CONVERTER
let estaAcompanhada = idade >= 18 ? true : false; //OPERADOR TERNARIO
if (idade >= 18) {
  console.log("Pode entrar");
} else if (estaAcompanhada == true) {
  //AQUI PODEMOS COLOCAR OUTRA CONDIÇÃO
  console.log("Pode entrar, pois nao esta acompanhado");
} else {
  console.log("Não pode entrar");
}

//FUNÇÕES > PODEMOS ESCREVER PROCEDIMENTO QUE PODEM SER REAPROVEITADOS DURANTE O PROGRAMA, A FUNÇÃO PRECISA SER CHAMADA. AS FUNÇÕES PODEM RECEBER PARAMETRO DENTRO DO PARENTESES. TODAS AS VARIAVEIS QUE SÃO DEFINIIDAS NA FUNÇÃO SÃO VALIDAS SOMENTE DENTRO DA FUNÇÃO
//AS FUNÇÕES PODEM RETORNAR VALORES

function calculaIdade(anoNascimento) {
  let idade2 = 2022 - anoNascimento;
  return idade2;
}
console.log(calculaIdade(1975));
//NO CONSOLE TEMOS OS SINAIS > QUE SIGNIFICA UMA ENTRADA DE DADOS, ENQUANTO O SINAL DE < SIGNIFICA UMA SAIDA DE DADOS(return)
