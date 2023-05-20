/**
 * 
 AULA 1 - GRUNT
 OUTRA FERRAMENTA PARA AUTOMAÇÃO DE TAREFAS, PODEMOS COMPILAR O SASS, LESS, COMPRESSÃO DE IMAGENS, ARQUIVOS

 NO SITE https://gruntjs.com/ 

 ANTES PRECISAMOS REALIZAR A INSTALAÇÃO DO GRUNT, UMA DE FORMA GLOBAL E OU COMO DEV

 npm i -g grunt-cli
cli> comand line interface

CRIAMOS UM PROJETO
npm init

AGORA INSTALAR O GRUNT NO NOSSO PROJETO
npm i --save-dev grunt


AGORA VAMOS NO package.json VAMOS CRIAR UM NOVO SCRIPT
"grunt": "grunt",

AGORA PRECISAMOS CRIAR UM ARQUIVO DE CONFIGURAÇÃO PARA O grunt gruntfile.js
DENTRO DESSE ARQUIVO TEMOS QUE ESCREVER:
module.exports = function(grunt){
  grunt.initconfig({
    pkg: grunt.file.readJSON('package.json'),
  })
}
DESCRVENDO ESSAS LINHAS DE COMANDO ACIMA: PORTANTO O module.exports VAI RECEBER UMA FUNÇÃO QUE TEM COMO PARAMETRO grunt, DENTRO DO CORPO DESSA FUNÇÃO TEMOS, TEMOS A CONFIGURAÇÃO INICIAL QUE É UMA FUNÇÃO QUE VAI RECEBER UM OBJETO pkg


APOS ISSO PODEMOS EXECUTAR
npm run grunt

TEREMOS O SEGUINTE ERRO:
Loading "Gruntfile.js" tasks...ERROR
>> TypeError: grunt.initconfig is not a function
Warning: Task "default" not found. Use --force to continue.

Aborted due to warnings.

MAS FOI INSTALADO CORRETAMENTE

AULA 2 - CRIANDO TAREFAS

LOGO APÓS A CONFIGURAÇÃO NO ARQUIVO gruntfile.js DE:
module.exports = function(grunt){
  grunt.initconfig({
    pkg: grunt.file.readJSON('package.json'),
  })
}

PARA:
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  })

  grunt.registerTask('olaGrunt',function() {
    console.log('Olá Grunt')
  })
}

NO PRIMEIRO ARGUMENTO DA FUNÇÃO A GENTE COLOCA O NOME DA TAREFA, NO SEGUNDO ARGUMENTO VAI SER UMA FUNÇÃO

PARA TESTAR PODEMOS NO TERMINAL COLOCAR
npm run grunt olaGrunt
TEMOS QUE COLCOAR ISSO POIS CASO CONTRÁRIO ELE VAI BUSCAR A TAREFA default E VAI DAR UM ERRO
RESPOSTA:
rscal@LAPTOP-QVS738B5 MINGW64 ~/Desktop/Ebac/18-Grunt (main)
$ npm run grunt olaGrunt

> 18-grunt@1.0.0 grunt
> grunt olaGrunt

Running "olaGrunt" task
Olá Grunt

Done.

SE TIVESSIMOS VÁRIAS TAREFAS O PROCESSO SERIA UM POUCO MAIS DEMORADO, PARA ISSO TEMOS QUE TORNAR ESSA TAREFA ASSINCRONA. PARA ISSO VAMOS INCLUIR UMA FUNÇÃO PARA SIMULAR UMA TAREFA DEMORADA:
 grunt.registerTask("olaGrunt", function () {
    console.log("Olá Grunt");
  });

  PARA:

   grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 3000);
  });
};


AGORA VAMOS CRIAR A TAREFA default, DE:

grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 3000);
  });
};

PARA:

grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 3000);
  });
  grunt.registerTask('default', ['olaGrunt'])
};
MAS AQUI NO SEGUNDO ARGUMENTO DA FUNÇÃO NÃO COLOCAMOS UMA FUNÇÃO E SIM UM ARRAY QUE VAI POSSUIR TODAS AS TAREFAS QUE QUEREMOS EXECUTAR
NO TERMINAL:
npm run grunt

AULA 3 - USANDO O GRUNT PARA COMPILAR LESS
TEMOS QUE INSTALAR UM PLUGIN NO TERMINAL
npm i --save-dev grunt-contrib-less

TEMOS QUE FAZER A CONFIGURAÇÃO DESSE PLUGIN NO ARQUIVO gruntfile.js ANTES DA TAREFA default
grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 3000);
  });
  grunt.registerTask("default", ["olaGrunt"]);
};

PARA:

grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 3000);
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask("default", ["olaGrunt"]);
};

TEMOS TAMBEM QUE REALIZAR A CONFUGURAÇÃO DO GRUNT COM O LESS, NO gruntfile.js
DE:
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  PARA:

  module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "main.css": "main.less"
        }
      }
    }
  });
AGORA TEMOS QUE CRIAR O ARQUIVO FONT main.less
PODEMOS SUBSTITUIR DENTRO DA FUNÇÃO default o OlaGrunt, por less QUE JÁ VAI EXECUTAR NOSSA TAREFA.
DE:
 grunt.registerTask("default", ["olaGrunt"]);
PARA:
 grunt.registerTask("default", ["less"]);

 AGORA PODEMOS EXECUTAR DENTRO DO TERMINAL:
 npm run grunt
 RETORNO:
 rscal@LAPTOP-QVS738B5 MINGW64 ~/Desktop/Ebac/18-Grunt (main)
$ npm run grunt

> 18-grunt@1.0.0 grunt
> grunt

Running "less:development" (less) task
>> 1 stylesheet created.

Done.

NESSA PARTE CO CÓDIGO NO ARQUIVO gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./main.css": "./main.less",
        },
      },
    },
  });

  TEMOS O development, ESSA PARTE DO CÓDIGO INDICA O AMBIANTE QUE ESTAMOS TRABALHANDO, NO CASO ESTAMOS TRABALHANDO NO AMBIENTE development QUE É O LUGAR ONDE REALIZAMOS A PRODUÇÃO DO SITE, MAS TEMOS OUTRO AMBIENTE QUE É PARA O USUARIO FINAL QUE CHAMA production, PORTANTO TEREMOS:
  PARA:
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./main.css": "./main.less",
        },
      },
      production:{
        options:{
          compress: true,
        },
        files:{
          'main.min.css':'main.less'
        }
      }
    },
  });

  EXECUTAMOS NOVAMENTE O COMANDO npm run grunt
  RETORNO:
  rscal@LAPTOP-QVS738B5 MINGW64 ~/Desktop/Ebac/18-Grunt (main)
$ npm run grunt

> 18-grunt@1.0.0 grunt
> grunt

Running "less:development" (less) task
>> 1 stylesheet created.

Running "less:production" (less) task
>> 1 stylesheet created.

Done.

AGORA TEMOS O ARQUIVO main.min.css O ARQUIVO MIMIFICADO NA VERSÃO DE PRODUÇÃO


PODEMOS UTILIZAR O GRUNT PARA COMPILAR O SASS, PARA ISSO TEMOS QUE INSTALAR UM PLUGIN
npm i --save-dev grunt-contrib-sass

NO gruntfile.js REALIZAMOS O CARREGAMENTO DESSE PLUGIN E APÓS TEMOS DE DECLARA ESSA TAREFA NO NOSSO default, COMO É UM ARRAY, BASTA COLOCAR A , E INCLUIR
DE:
 grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less"]);
};

PARA:

 grunt.loadNpmTasks("grunt-contrib-less");

 grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask("default", ["less", "sass"]);
};

APÓS ISSO TEMOS QUE FAZER A CONFIGURAÇÃO DO BLOCO DO SASS, TEMOS QUE INCLUIR APÓS O BLOCO DO LESS
DE:
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./main.css": "./main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "main.min.css": "main.less",
        },
      },
    },
  });

  PARA:

  module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./main.css": "./main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "main.min.css": "main.less",
        },
      },
    },
    sass:{
      dist:{
        files:{
          'main2.css':'main.scss'
        }
      }
    }
  });


  TEMOS QUE CRIAR O ARQUIVO main2.scss, E DEPOIS RODAS npm run grunt, DEVE SER CRIADO O ARQUIVO main2.css E POR PADRÃO ELE JÁ CRIA main2.css.map QUE É UM ARQUIVO DE MAPEAMENTO

  PODEMOS ADICIONAR NO gruntfile.js UM COMANDO PARA QUE O ARQUIVO DO SASS PRODUZA UM CSS MIMIFICADO
  DE:
  sass: {
      dist: {
        files: {
          "main2.css": "main2.scss",
        },
      },
    },
  });

  PARA:
  sass: {
      dist: {
        options:{
          style: 'compressed'
        },
        files: {
          "main2.css": "main2.scss",
        },
      },
    },
  });

  AGORA TEMOS UM ARQUIVO MIMIFICADO, QUE OCUPA MENOS ESPAÇO

  AULA 4 - EXECUTANDO TAREFAS DE FORMA PARALELA

  ATE AGORA VIMOS O GRUNT EXECUTANDO TAREFAS DE FORMA SERIAL, ISSO PODE CAUSAR LENTIDÃO. TEMOS QUE INSTALAR UM PLUGIN
  npm i --save-dev grunt-concurrent
  COMO É UM PLUGIN DO NPM TEMOS QUE CARREGAR NO ARQUIVO gruntfile.js
  grunt.loadNpmTasks('grunt-concurrent');

  PARA FAZER A CONFIGURAÇÃO DO PLUGIN, TEMOS QUE ADICIONAR UMA NOVA PROPRIEDADE NA CONFIGURAÇÃO DO GRUNT, APÓS O BLOCO DO SASS
  concurrent:{
    target:['olaGrunt','less','sass']
  }

  APÓS ISSO VAMOS NO default e TROCAMOS TUDO QUE ESTAVA NO ARRAY PELO concurrent
  DE:
  grunt.registerTask("default", ["less", "sass"]);
};

PARA:
grunt.registerTask("default", ["concurrent"]);
};

 */
