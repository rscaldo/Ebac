/**
 * 
 AULA 1 - CONHECENDO O BABEL

 ESSES RECURSOS FAZEM PARTE DO ECM6, O SITE DA ECMA
 www.ecma-international.org

 TODA VEZ QUE A GENTE OUVIR ECMASCRIPT É UMA REFERÊNCIA AO ECMA-262, PORTANTO O ECMASCRIPT NÃO É UMA LIGUAGEM DE PROGRAMAÇÃO MAS SIM UMA SERIE DE REGRAS PARA UMA LINGUAGEM DE PROGRAMAÇÃO DEVE SEGUIR

 PARA UTILIZAR NOVAS IMPLEMENTAÇÕES NO JS EM NAVEGADORES QUE AINDA NÃO SUPORTAM ESSAS ATUALIZAÇÕES TEMOS QUE UTILIZAR O BABEL
 www.babeljs.io

 ELE PEGA UM CÓDIGO MAIS RECENTE E TRADUZ PARA UM CÓDIGO COM UMA VERSÃO MAIS ANTIGA, ESSE PROCESSO É CHAMADO DE TRANSPILAÇÃO

 AGORA VAMO CONFIGURAR O BABEL
 ABRIR TERMINAL:
 npm i --save-dev @babel/core @babel/cli

 VÃO SER CRIADOS OS ARQUIVOS package.json, package-lock.json e a pasta node_modules, PRECISAMOS CRIAR A PASTA src

 DENTRO DE package.json TEMOS QUE CRIAR UMA SESSÃO DE scripts
 "scripts":{
  "build": "babel src -d dist"
 }

 TEMOS QUE RODAR: npm run build

 VAI SER CRIADO A PASTA dist
 PRECISAMOS INSTALAR UM PLUGIN PARA AJUDAR: npm i --save-dev @babel/preset-env

 PRECISAMOS CRIAR UM ARQUIVO DE CONFIGURAÇÃO DO BABEL CHAMADO: babel.config.json NO ARQUIVO
 {
  "presets": ["@babel/preset-env"]
 }

 NOVAMENTE EM package.json PRECISAMOS ADICIONAR MAIS UMA CONFIGURAÇÃO
 DE:
 "scripts":{
  "build": "babel src -d dist"
 }

 PARA:
 "scripts":{
  "build": "babel src -d dist"
 },
 "browserslist":"> 0.25%"


 AULA 2 - ARRAY

 TEMOS O SEGUINTE CÓDIGO:
 const redesSociais = ["Facebook", "instagram", "twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

i> É O INDICE INICIAL DO ARRAY, INICIANDO POR 0

array.length > PEGA A QUANTIDADE DE ITEM NO ARRAY

COM O ECMASCRIPT 6 TEMOS OUTRA FORMA DE ESCREVER A MESMA COISA:

redesSociais.forEach(function(nomeDaRedeSocial){
  console.log(`Eu tenho perfil na rede social ${nomeDaRedeSocial}`)
})
 
NA OPÇÃO DO forEach TEMOS A OPÇÃO DE COLOCAR OUTRO ARGUMENTO COMO O indice, QUE VAI DAR UM INDICE A NOSSA LISTA

redesSociais.forEach(function(nomeDaRedeSocial, indice){
  console.log(`#${indice}Eu tenho perfil na rede social ${nomeDaRedeSocial}`)
})


TEMOS OUTROS METODOS PARA O ARRAY, COMO O .map

const alunos = {"Gustavo", "Julia", "Paula", "Wagner"}

NESSE EXEMPLO VAMOS TRANSFORMAR UM ARRAY QUE SÓ POSSUI STRING PARA UM ARRAY DE OBJETOS

alunos.map(itemAtual){
  itemAtual = {
    nome: itemAtual,
    curso:"Frontend"
  }
  return itemAtual
}

ESSE CÓDIGO VAI FUNCIONAR MAS PRECISAMOS CRIAR UMA VARIAL PARA ARMAZENAR ESSA RESPOSTA:

const alunos2 = alunos.map(itemAtual){
  itemAtual = {
    nome: itemAtual,
    curso:"Frontend"
  }
  return itemAtual
}

AGORA PODEMOS DAR UM CONSOLE.LOG EM ALUNOS 2

OUTRO EXEMPLO:
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
  numeroAtual = numeroAtual * 2
  return numeroAtual
})

console.log(dobroDosNumeros)

AGORA TEMOS QUE BUILDAR
npm run build
DEPOIS RODAR O array.js
node dist/array.js

PODERIAMOS TEM REALIZADO ISSO DIRETO NO RETURN

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros2 = numeros.map(function(numeroAtual){
  return numeroAtual * 2
})

console.log(dobroDosNumeros2)


TEMOS UM OUTRO METODO QUE SERVE PARA PROCURAR UM ITEM NO ARRAY, PARA ISSO VAMOS UTILIZAR O EXEMPLO DOS ALUNOS

CASO ESSE ARRAY FOSSE PREENCHIDO POR ITENS DO BACKEND OU FORNECIDO POR OUTRA FONTE NÓS NÃO CONHECERIAMOS OS ITEM DESSE ARRAY, POR ISSO A NECESSIDADE DE UTILIZAR UMA FUNÇÃO PARA BUSCA

const paula = alunos2.find(function(item){
  return item.nome == "Paula" //true or false
})

console.log(paula)

O find RETORNA O ITEM QUE ESTAMOS PROCURANDO MAS TEMOS UMA OUTRA OPÇÃO QUE RETORNA O INDICE DO ITEM .findIndex

const indiceDaPaula = alunos2.findIndex(function(item){
  return item.nome == "Paula" //true or false
})


OBS: .find > QUANDO NÃO TEM NINGUEM QUE EQUIVALE AO PREDICADO RETORNA undefined

    .findIndex > QUANDO NÃO TEM NINGUEM QUE EQUIVALE ELE RETORNA O -1


PORTANTO PARA SABER SE O RETORNO DO .findIndex É VALIDO TEMOS QUE SABER SE ELE É >=0


OUTROS METODOS
PARA VEIRIFCAR OS VALORES DENTRO DE UM ARRAY

every>CONSEGUIMOS VERIFICAR SE TODOS OS ALUNOS DENTRO DO ARRAY FAZEM PARTE DO CURSO DE FRONTEND, ELE RETORNA UMA RESPOSTA BOOLEANA

alunos2.every(function(item){
  return item.curso === "frontend"
})
ESSA VERIFICAÇÃO VAI PASSAR POR TODOS OS ITENS DO ARRAY E SE TODOS FOREM VERDADEIROS TEREMOS UMA RESPOSTA true, CASO UM DELES NÃO SEJA VERDADEIRO TEREMOS UMA RESPOSTA false

OBS: TODA VEZ QUE TEMOS UM RETORNO BOOLEANO TEMOS QUE ARMAZENAR ESSA RESPOSTA PORTANTO

const todosAlunosSaoDeFrontend = alunos2.every(function(item){
  return item.curso === "frontend"
})

console.log(todosAlunosSaoDeFrontend)

SO PARA TESTE PODEMOS ADICONAR UM NOVO ALUNO AO NOSSO ARRAY COM UM CURSO DIFERENTE, PARA ISSO

alunos2.push({
  nome:"lucio",
  curso: "Backend"
})


OUTRO METODO

some>VERIFICA SE PELO MENOS UM ITEM ESTA DENTRO DO ARRAY

const existeAlgumAlunoWagner = alunos2.some(function(item){
  return item.nome === "Wagner"
})
console.log(existeAlgumAlunoWagner)

PODEMOS ADICIONAR MAIS DE UMA BUSCA

const existeAlgumAlunoWagner = alunos2.some(function(item){
  return item.nome === "Wagner" && item.curso ==="Frontend"
})

PODEMOS FILTRAR ITENS DE UM ARRAY PARA ISSO USAMOS .filter

const alunoDeBackend = alunos2.filter(function(item){
  return item.curso === "Backend"
})


ATE AGORA ESTAMOS USANDO FUNÇÕES ANONIMAS PARA DAR O CALLBACK MAS PODERIAMOS CRIAR UMA FUNÇÃO PARA REALIZAR ISSO

function filtraAlunoDeBackend(aluno){
  return aluno.curso === "Backend"
}

E DEPOIS SUBSTITUIR A FUNÇÃO ANONIMA

const alunoDeBackend = alunos2.filter(filtraAlunoDeBackend)
 

OUTRO METODO
reduce> CONSEGUIMOS REDUZIR O CONTEUDO DE UM ARRAY EM UM UNICO VALOR

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
  acumulador += itemAtual
  return acumulador
}, 0)

console.log(soma);

UM POSSIVEL USO DE CASO PARA ESSE METODO É SOMAR O VALOR DE UM CARRINHO DE COMPRAS, ESSE METODO PODE SUBSTITUIR O FOR

PODEMOS USAR O .reduce PARA STRING, COM ISSO PODEMOS REDUZIR TUDO ISSO PARA UMA UNICA VARIAVEL

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
  acumulador += `${itemAtual.nome} `
  return acumulador
}, '')
console.log(nomeDosAlunos)



DICAS PARA ENTREVSITA
forEach > SÓ ITERA NÃO RETORNA NADA, NÃO TEM UM ARRAY COMO RETORNO

.map > PODEMOS ITERAR, MODICAR E RETORNAR MODIFICADO, PORTANTO PODEMOS REALIZAR MODIFICAÇÕES E TER UM NOVO ARRAY COMO RETORNO

.find > ENCONTRA UM ITEM DENTRO DE UM ARRAY

.findIndex > Encontra um index dentro de um array

.every > SE TODOS OS ITENS DENTRO DE UMA RRAY SATISFAZEM UM PREDICADO, UMA CONDIÇÃO

.some > APENAS QUE UM ITEM SATISFAÇA A CONDIÇÃO




AULA 3 - ARROW FUNCTION
UMA NOVA FORMA DE ESCREVER FUNÇÕES NO JAVASCRIPT

const minhaFuncao = () => {
  console.log("Diz olá")
}
minhaFuncao()

ESSA É A ESTRUTURA DE UMA ARROW FUNCTION, () SEGUIDO DE => E A ABERTURA DO BLOCO{}
MAS TEMOS ALGUMAS PARTICULARIDADE

NO RETORNO
const minhaFuncao2 = () => {
  return "Diz Ola"
}
console.log(minhaFuncao2())

MAS COM AS ARROW FUNCTION PODEMOS REALIZAR UM RETORNO DIRETO COM MENOS CÓDIGO

const minhaFuncao3 = () => "Diz olá";

console.log(minhaFuncao3())

É UMA FORMA MAIS SIMPLES DE ESCREVER MAS TEMOS QUE REALIZAR ALGUMAS ADAPTAÇÕES QUANDO RETORNAMOS UM OBJETO

const retornaUmCarro = () => {
  return{
    modelo: "ka",
    fabricante: "ford"
  }
}
console.log(retornaUmCarro)

MAS COM AS ARROW FUNCTIONS PODEMOS:

const retornaUmCarro2 = () => ({
    modelo: "ka",
    fabricante: "ford"
  })
console.log(retornaUmCarro2)


AS ARROW FUNCTIONS POSSUEM UM ESCOPO DE FUNÇÃO UM POUCO DIFERENTE
NESSE OBJETO TEREMOS DOIS METODOS(QUANDO TRABALHAMOS COM OBJETO AS FUNÇÕES DENTRO DO OBJETO SÃO MÉTODOS)

const carro = {
  velocidadeAtual: 40,
  acelerar: function(){
    this.velocidadeAtual += 10
  },
  frear: () => {
    this.velocidadeAtual -= 10;
  }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)

O this. NA ARROW FUNCTION É DIFERENTE DE UMA FUNÇÃO CONVENCIONAL, O this. DENTRO DE UMA FUNÇÃO ESCRITA COMO ARROW FUNCTION PODE RETORNAR UM VALOR UNDEFINED, O CONTEXTO QUE O NODE TEM OU O NAVEGADOR É DIFERENTE


AULA 4 - OPERADORES DE SPREAD E REST

DOIS NOVOS RECURSOS DO ECMA

REST

function somar(a, b){
  return a + b
}
console.log(somar(10,20))

E SE A GENTE QUISESSE SOMAR 3 NUMEROS, TERIAMOS QUE ADICONAR MAIS UM ARGUMENTO c NA NOSSA FUNÇÃO

function somar(a, b, c){
  return a + b + c
}
console.log(somar(10,20,30))


ISSO FUNCIONARIA MAS NÃO TEMOS A CAPACIDADE DE RECEBER UM NUMERO INDEFINIDO DE ARGUMENTOS, PARA RESOLVER TEMOS UMA PALAVRA RESERVADA arguments
arguments> RETORNA TODOS OS ARGUMENTOS PASSADOS EM UMA FUNÇÃO, COM ELE TEMOS A CAPACIDADE DE n NUMEROS

function somar2(){
  cosole.log(arguments)
}
console.log(somar2(10,20))

COM ESSA ESTRUTURA PODEMOS IR ADICIONANDO ARGUMENTOS, ESSA ESTRUTURA RECEBE O NOME DE DICIONÁRIO.
O arguments RETORNA UMA ESTRUTURA COMO SE FOSSE UM OBJETO MAS PODEMOS REALIZAR ALTERAÇÕES COMO SE FOSSE UM ARRAY, MAS O arguments NÃO É UM ARRAY.

MAS ELE É ITERAVEL, PODEMOS UTILIZAR O for

function somar3(){
  let soma =0;
  for (let i=0; i < arguments.length. i++){
    soma += arguments[i];
  }
  return soma;
}

console.log(somar3(10,30,33))


NO ECMASCRIPT 6 TIVEMOS A INCLUSÃO DO rest E CONSEGUIMOS SOMAR COMO SE FOSSE UM ARRAY

PARA UTILIZAR O rest TEMOS QUE ADICONAR ... ANTES DO ARGUMENTO

function somarComRest(...numeros){

}

COLOCANDO OS ... DIZEMOS QUE PODEMOS RECEBER INUMEROS ARGUMENTOS, NESSA FUNÇÃO ACIMA O JS VAI JUNTAR TODOS OS ARGUMENTOS PASSADOS EM UM ARRAY CHAMADO numero, COM ISSO DIGITANDO numero. TEMOS ACESSO AOS METODOS DE ARRAY

function somarComRest(...numeros){
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0)
  return soma;
}

console.log(somarComRest(10, 20, 30))


AGORA VAMOS VER O spread operator

const numeros2 = [1, 2, 3, 4]
...numeros2


A DIFERENÇA ENTRE O rest E O spread É O CASO DE USO, O rest É USADO COMO ARGUMENTO DE FUNÇÃO, ENQUANTO O spread USAMOS PARA CONCATENAÇÃO

const numeros2 = [1, 2, 3, 4]
console.log(...numeros2)

OUTRO EXEMPLO
const timesDeFutebolSp = ["santos", "palmeiras", "bragantino", "são paulo"];
const timesDeFutebolRio = ["vasco", "botafogo", "flamengo", "fluminense"]

COMO PODEMOS UNIR ESSES DOIS ARRAYS

TEMOS 2 OPÇÃO
UTILIZANDO concat

const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRio);

UTILIZANDO O OPERADOR spread
const timesDeFutebol2 = [...timesDeFutebolSp, ...timesDeFutebolRio];


PODEMOS UTILIZAR O spread COM OBJETOS

NESSE EXEMPLO TEMOS 2 OBJETOS QUE SÓ DIFEREM NO MOTOR, PARA EVITAR A REPETIÇÃO DE CÓDIGO PODEMOS USAR O spread

const carroDaJulia= {
  modelo: 'gol',
  marca: 'vw'
  motor: 1.6
}

const carroDaAna= {
  modelo: 'gol',
  marca: 'vw'
  motor: 1.8
}

PODEMOS UTILIZANDO O spread CONSTRUIR O NOVO OBJETO UTILIZANDO OS ELEMENTOS EM COMUM DO OBJETO ANTERIOR

const carroDaJulia= {
  modelo: 'gol',
  marca: 'vw',
  motor: 1.6
}

const carroDaAna= {
  ...carroDaJulia,
  motor: 1.8
}

console.log(carroDaJulia);
console.log(carroDaAna);


OUTRO RECURSO DO ECMASCRIPT - DESESTRUTURAÇÃO

EXEMPLO: SE A GENTE PRECISASSE PEGAR SOMENTE O MOTOR DO CARRO DA ANA
const motorDoCarroDaAna = carroDaAna.motor

COM A DESESTRUTURAÇÃO PODEMOS REALIZAR
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;
AQUI ACESSAMOS A PROPRIEDADE MOTOR DO OBJETO CAOODAANA E DEMOS O NOME DESSA CONSTANTE DE MOTORDOCARRODAANA


PODEMOS UTILIZAR A DEDESTRUTURAÇÃO PARA ARRAYS, VAMOS RECUPERAR O EXEMPLO DOS TIMES

const [item1, item2, item3] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)


AULA 5 - MAP E SET

MAP > FUNCIONA COMO UM DICIONÁRIO, É UM CONJUNTO DE VALORES E ESSES VALORES SÃO COMO OBJETOS

let meuMap = new Map();

PARA ADICIONAR UM VALOR A UM MAP
meuMap.set("nome", "Gian")

console.log(meuMap)

PARA RECUPERAR UM VALOR DE UM MAP
const nome = meuMap.get("nome")

console.log(nome)


PARA RECUPERAR A QUANTIDADE DE ITENS
console.log(meuMap.size)

VERIFICAR SE DETERMINADA CHAVE EXISTE EM UM MAP
console.log(meuMap.has("nome"))

FAZER A LIMPEZA DO MAP
meuMap.clear()


FAZER UMA ITERAÇÃO NO MAP(FOR)
PRIMEIRO VAMOS INCLUIR ALGUNS DADOS NO MAP
meuMap.set("stack", "html, css, js")

PARA REALIZAR A ITERAÇÃO UTILIZAMOS UM FOR DIFERENTE
for(let chave of meuMap.keys()){
  console.log(chave)
}

AQUI TEREMOS O RETORNO:
nome
stack


AGORA VAMOS BUSCAR O VALOR
for (let valor of meuMap.values()) {
  console.log(valor);
}

AGORA VAMOS BUSCAR A ENTRADA
for (let entrada of meuMap.entries()) {
  console.log(entrada);
}

COMO REMOVER UM ITEM DENTRO DO MAP
meuMap.delete("stack")


AGORA VAMOS ESTUDAR O SET
SET > É UMA ESTRUTURA MAIS RIGIDA E NÃO PODEMOS REPETIR UM VALOR DENTRO DO SET

const cpfs = new Set();

cpfs.add("27336581072")
cpfs.add("45011546080")
cpfs.add("16006978016")

console.log(cpfs)

OBS:AQUI TRATAMOS O CPF COMO UMA STRING POIS PODEMOS TER UM 0 A ESQUERDA E ISSO DARIA UM ERRO

//CONSEGUIMOS INTERAR O MAP OU SET ATRAVES DO forEach

cpfs.forEach((valor) =>{
  console.log(valor)
})


CRIIANDO UMA LISTAGEM DE ITENS UNICOS
const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

TEMOS QUE CONVERTER UM ARRAY PARA UM SET
const arrayComoSet = new Set([...array])
console.log(arrayComoSet)

COMO O SET NÃO PERMITE ITENS DUPLICADOS ELE REMOVE OS ITENS, MAS AGORA TEMOS UM ARRAY COMO SET PARA VOLTAR PARA ARRAY

const arraySemItensDuplicados = [...arrayComoSet]
console.log(arraySemItensDuplicados)

AULA 6 - PROGRAMAÇÃO ASSINCRONA

O JS OPERA EM APENAS UM PROCESSADOR DO SEU PROCESSADOR, PORTANTO ELE VAI FAZER A LEITURA DE UMA FORMA SEQUENCIAL, MAS COM O JS6 TEMOS A OPÇÃO DE EXECUTAR 

PROGRAMAÇÃO SINCRONA > TEMOS UMA EXECUÇÃO SINCRONA ENTRE AS TAERFAS

PROGRAMAÇÃO ASSINCRONA > NÃO TEM ESSE SINCRO

EXEMPLO:

function funcaoPesada(){
  let execucoes = 0;
  for(let i =0; i <100000000; i++){
  execucoes++}
  return execucoes;
}

console.log("inicio")
funcaoPesada()
console.log("fim")

PODEMOS CONVERTER FUNÇÕES PESADAS PARA UMA promise E TER PROCESSAMENTO PARALELO

console.log("inicio2");
funcaoMuitoPesadaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
console.log("fim");

resolve > NO CASO DO SUCESSO DO PROCESSAMENTO
reject > CASO DE ALGUMA FALHA


PARA TORNAR UMA FUNÇÃO ASSINCRONO SINCRONA NOVAMENTE, USAMOS async await

async function execucaoPrincipal(){
  console.log('inicio3')
  await funcaoMuitoPesadaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
console.log("fim3");
}

execucaoPrincipal()

ESTAMOS INFORMANDO PARA O JS QUE ESSA FUNÇÃO É SINCRONA(async) DEVE AGUARDAR(await) TERMINAR A FUNÇÃO PARA CONTINUAR


EXISTE OUTRA FORMA DE USAR O await

async function execucaoPrincipal(){
  console.log('inicio4')
  const resultado = await functionMuitoPesadaPromise
console.log(resultado)
console.log("fim4");
}

PODEMOS PASSAR PARAMETROS PARA UMA PROMISE
const primiseComParametros = (login, senha) => new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve(`Logado com o usuário: ${login}`)}, 3000)
  
})
*/
