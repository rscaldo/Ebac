/**
AULA 1 - LESS

LESS É UM PRE-PROCESSADOR CSS E JUNTAMENTE COM O SASS É MUITO IMPORTANTE

NO TERMINAL VAMOS INSTALAR O LESS DE FORMA GLOBAL EM NOSSA MAQUINA
npm install -g less

DENTRO DA PASTA DO PROJETO:
npm init
PARA CRIAR O package.json

AGORA PRECISAMOS INSTALAR O LESS DENTRO DA DEPENDENCIA DO PROJETO
npm install --save-dev less

A PASTA node_modules VAI SER CRIADA, ELA NÃO PRECISA SER COMMIT, CRIAR .gitignore E COLOCAR A APASTA LÁ

CRIOU TAMBEM O ARQUIVO package-lock.json

TEMOS QUE IR NO ARQUIVO package.json E CRIAR UM SCRIPT PARA COMPILAR O LESS
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  PARA
   "scripts": {
    "less": "lessc ./src/styles/main.less ./build/styles.main.css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  lessc > O C NO FINAL É DE COMPILADOR

  TEMOS QUE EXECUTAR ESSE SCRIPT
  npm run less

  ELE VAI CRIAR A PASTA build COM O main.css, O LESS POR PADRÃO NÃO POSSUI A FUNÇÃO DE watch, PARA ISSO PRECISAMOS INSTALAR UM PLUGIN
  npm i -g less-watch-compiler

  AGORA TEMOS QUE INSTALAR NO AMBIENTE DE DESENVOLVIMENTO
  npm i --save-dev less-watch-compiler

  E AGORA NO ARQUIVO package.json AO INVÉS DE USAR O lessc USAMOS:
  "scripts": {
    "less": "lessc ./src/styles/main.less ./build/styles.main.css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  PARA

  "scripts": {
    "less": "less-watch-compiler ./src/styles ./build/styles main.less",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  COM O less-watch-compiler TEM UMA SINTAXE DIFERENTE PARA SE INICIAR O SCRIPT NÃO USAMOS O CAMINHO COM O ARQUIVO, MAS SOMENTE A PASTA INICIALMENTE E DEPOIS COLOCAMOS O ARQUIVO PRINCIPAL


  AULA 2 - VARIAVEIS

  PARA DECLARAR UMA VARIAVEL NO LESS USAMOS O @, POR EXEMPLO @corDeFundo: #f5f6fa
  PARA IMPORTAR UM OUTRO ARQUIVO DE LESS PARA O ARQUIVO main.less USAMOS @import "variaveis.less"


  AULA 3 - ESCAPINGS
PODEMOS ESCREVER QQ CONTEUDO DENTRO DO ESCAPING E QUANDO O LESS FOR COMPILADO ELE VAI SUBSTITUIR O CONTEUDO PELO VALOR DO ESCAPING COMO NO EXEMPLO DO RESPONSIVO:
COLOCAR: @breakpointmobile:~ "(max-width: 767px)"; LOGO APÓS A IMPORTAÇÃO DOS ARQUIVOS
DEPOIS PODEMOS USAR ESSA VARIAVEL:
@media @breakpointMobile {
    background-color: red;
  }


  AULA 4 - MIXINS

  PODEMOS USAR UMA ABREVIAÇÃO &-sutitle PARA profile-bio-subtitle

  COM A REPETIÇÃO DE CÓDIGO DE CSS PODEMOS USAR OS MIXINS, 
  .marginBottom8 {
  margin-bottom: 8px;
}
E PODEMOS SUBSTITUIR NO CÓDIGO PARA SUBSTITUIR USAMOS .marginBottom8()


AULA 5 - MAPS

DENTRO DOS ICONES .svg TEMOS A PROPRIEDADE stroke="currentColor" , ALTERANDO ELA PODEMOS MUDAR A COR DO NOSSO ICONE, 

O LESS TEM UM RECURSO BEM INTERESSANTE DE MAPEAMENTO DE VALORES, PODEMOS CRIAR UM MAPA DE CORES POR EXEMPLO, CRIAMOS UM NOVO ARQUIVO LESS mapas.less

#colors() {
  backgroundcolor: #192a56;
  buttoncolor: #0097e6;
  textcolor: #f5f6fa;
}

DEPOIS IMPORTAMOS ESSE ARQUIVO NO main.less 
@import "mapas.less";

E PODEMOS USAR NO main.less ESSE MAPA DE CORES, A PRIMEIRA OPÇÃO É COM O MAPA DE CORES E A SEGUNDA COM VARIAVEIS
body {
  background-color: #colors[backgroundcolor];
  color: @corDosTextos;
}

 */
