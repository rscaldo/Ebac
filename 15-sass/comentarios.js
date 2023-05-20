/**
 * 
 AULA 15 - SASS - Syntactically Awesome StyleSheets
 COMANDOS QUE DEVEMOS EXECUTAR NO node.js
 npm > node package manager
 -g > diz que a instação vai ficar disponivel de forma global

 npm install -g

 TEMOS QUE CRIAR UM ARQUIVO COM EXTENÇÃO .scss A EXTENÇÃO sass NÃO SE USA MAIS.
 O SASS É UM PRE-PROCESSADOR, PORTANTO APÓS ESCREVER NA LINGUAGEM DO SASS TEMOS QUE COMPILAR PARA TRANSFORMAR EM CSS, ISSO DEVE SER FEITO PELA LINHA DE COMANDO

 npm init > INICIAR UM PROJETO NO NODE, VAI DANDO OK ATÉ CRIAR UM ARQUIVO .json

 APOS ISSO TEMOS QUE INSTALAR O SASS NO NOSSO PROJETO, 
 npm i --save-dev sass

 --save-dev > INDICA QUE ESSE COMPONENTE É DE DESENVOLVIMENTO, PORTANTO QUANDO REALIZAR O DEPLOY NÃO PRECISA DELA

O COMANDO VAI CRIAR UMA PASTA CHAMADA node_modules, ELA NÃO DEVE IR PARA O GITHUB, PORTANTO TEMOS QUE CRIAR UM ARQUIVO NO VSCODE CHAMADO .gitignore E COLOCAMOS O NOME DA PASTA
node_modules


ABRIR O ARQUIVO package.json, TEMOS AS SEGUINTES LINHAS

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  TEMOS QUE INCLUIR "sass":"sass", LOGO ABAIXO DAS CHAVES DO script

"scripts": {
  "sass":"sass",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

APOS SALVAR O DOCUMENTO VOLTAMOS AO TERMINAL E 
npm run sass /ARQUIVO DE ENTRADA/ /ARQUIVO DE SAIDA/
ANTES DE RODAS ESSE COMANDO DEVEMOS CRIAR O ARQUIVO main.scss

npm run sass main.scss main.css
 

VÃO SER CRIADOS 2 ARQUIVO, main.css E main.css.map
 */

/**
 * 
 AULA 3 
 VAMOS APAGAR OS ARQUIVOS CSS E SCSS
 CRIAR UMA PASTA CHAMADA source, PARA COLOCAR OS ARQUIVOS FONTES, DENTRO DE source, VAMOS CRIAR UMA PASTA dist, OUTRA PASTA CHAMADA build QUE É ONDE VÃO ESTAR OS ARQUIVOS FINAIS DO SITE

 
COLOCAR O LINK DO ARQUIVO CSS NO HEADER DENTRO DA PASTA build 
<link rel="stylesheet" href="./build/main.css">

PASTA source > ONDE O PROGRAMADOR IRA ATUAR
PASTA build > ONDE OS ARQUIVOS FINAIS, QUE SERAM CONSUMIDOS PELO SERVIDOR

IR EM package.json NA LINHA QUE TEMOS O sass COLOCAR O CAMINHO CORRETO
 "sass": "sass",

  "sass": "sass source/main.scss build/main.css",
AQUI ESTAMOS DIZENDO QUE O ARQUIVO INICIAR ESTA EM source/main.scss  E O ARQUIVO FINAL DEVE ESTAR EM build/main.css

PARA TESTAR TEMOS QUE DIGITAR O SEGUINTE CODIGO NO TERMINAL
npm run sass

UM ARQUIVO main.css.map DEVE SER CRIADO NA PASTA build

VAMOS PARA O ARQUIVO main.scss 

VARIAVEIS
> NÃO PRECISAMOS FICAR REESCREVENDO VARIAS VEZES O VALOR DE UMA PROPRIEDADE, PODEMOS CRIAR UMA VARIAVEL COM O SEGUINTE COMANDO

$corPrincipal: blue

body{
  backoground-color: $corPrincipal
}

APOS ESCREVER ESSE CÓDIGO NO main.scss TEMOS QUE IR NO TERMINAL E DIGITAR npm run sass

SE A GENTE OLHAR O ARQUIVO main.css LA O SASS JÁ VAI TER SUBSTITUIDO O VAMOR DA VARIAVEL PARA O VALOR DA COR, ISSO ACONTECE DEPOIS DO COMANDO DIGITADO npm run sass, QUE QUER DIZER QUE ESTAMOS COMPILANDO O SASS

NO CSS NORMAL TEMOS QUE REALIZAR O SEGUINTE CÓDIGO
header h1 {
  color: red;
}

NO SASS PODEMOS ENCURTAR ESSE CAMINHO

header {
  background-color: $corPrincipal;
  h1{
    color:red
  }
}

UMA DICA IMPORTANTE PARA O ARQUIVO package.json PODEMOS INCLUIR O COMANDO --watch NO FINAL DA LINHA DO sass PARA NÃO TER QUE FICAR COMPIANDO TODA VEZ O SASS NO TERMINAL
    "sass": "sass source/main.scss build/main.css",
    PARA
    "sass": "sass source/main.scss build/main.css --watch",

IR NO TERMINAL E EXECUTAR O COMANDO
npm run sass --watch


A PPRINCIPAL VANTAGEM DO SASS É ESCREVER UM CODIGO MENOS VERBOSO, MAIS LEGIVEL

CÓDIGO DA AULA 3
$corPrincipal: blue;
$corDoTexto: #111;

body {
  background-color: $corPrincipal;
}

header {
  background-color: $corPrincipal;
  h1 {
    color: $corDoTexto;
  }
}

button {
  padding: 16px;
  background-color: $corDoTexto;
  color: $corPrincipal;

  &:hover {
    background-color: red;
  }
}




AULA 04 - MODULOS

PODEMOS QUEBRAR O CONTEUDO DO SASS EM VÁRIOS CONTEUDOS, VAMOS CRIAR UM ARQUIVO reset.scss DENTRO DA PASTA source, E COLOCAMOS O SEGUINTE CÓDIGO
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

DEPOIS TEMOS QUE IR NO .scss PRINCIIPAL QUE NO CASO É O main E REALIZAR O LINK COM
@use 'reset'

PODEMOS SEPARAR O SCSS POR PASTAS EM config PARA AS CONFIGURAÇÕES DO SITE, E OUTRAS PASTAS QUE VOCE QUISER
ESSA SEPARAÇÃO DOS ARQUIVOS DO scss NO SASS NOS CHAMAMOS DE MODULOS

AULA 5 - MIXINS
PODEMOS REAPROVEITAR AS PROPRIEDADES

@mixin elementoForm(){
     padding: 8px;
     display: block;
     width: 100%;
     margin-bottom: 16px;
}

O MIXIN TEM QUE ESTAR ANTES DO SEU USO, PARA INCLUIR ELE EM ALGUM SELETOR DEVEMOS
@include elementoForm()


AULA 6

 */
