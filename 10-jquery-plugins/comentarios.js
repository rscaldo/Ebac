//PUGLIN É UM PEDAÇO DE CÓDIGO QUE FOI ESCRITO COM JS E CSS
//NO HTML CRIAMOS UMA DIV QUE VAI ENVOLVER TUDO DO MENU
//PODEMOS USAR UM ATALHO NO VSCODE span*3 JA COLOCA 3 TAGS

//PARA CRIAR O CARROSSEL DE IMAGENS
//TEMOS QUE INSTALAR O Slick, NA PÁGINA:https://kenwheeler.github.io/slick/ VAMOS NA SESSÃO GETTING STARTED VAMOS ATÉ A OPÇÃO Add slick.js before your closing <body> tag, after jQuery (requires jQuery 1.7 +)
//COPIAR AS 2 PRIMEIRAS LINHAS
//<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
//<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
//VAMOS TER QUE USAR ATRAVES DA CDN(UM SERVIDOR DE ARQUIVOS ESTÁTICOS) PARA NÃO TER QUE BAIXAR O ARQUIVO DO slick, SERIA PARECIDO COM O QUE FAZEMOS COM O GOOGLE FONTS
//CLICAR NO LINK get it now, COPIAR A LINHA DO CSS E JOGAR DENTRO DO HTML NO HEAD JUNTOS COM OS OUTROS LINKS, APOS ADICIONAR ESSE LINK TEMOS QUE ADICONAR A MESMA LINHA A BAIXO E FAZER UMA PEQUENA ALTERAÇÃO
//<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
//PARA
//<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
//AINDA NO go get it TEMOS QUE ADICIONAR A LINHA DE JS, ABAIXO DOS OUTROS 2 SCRIPTS
//<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

//NESSO PROJETO TEMOS QUE ADICIONAR UMA DIV ABAIXO DO HEADER, POIS APÓS O HEADER TEREMOS O SLIDE DE IMAGENS, INCLUIR AS IMGS DO SLIDE
//VAMOS ABRIR DENTRO DO HTML ABAIXO DA INPORTAÇÃO DOS SCRIPTS DO slick UM NOVO SCRIPT PARA RODAR O jquery DENTRO DESSE SCRIPT NO HTML
//COLOCAMOS UM id NA div DO CARROSSEL
/**
  <script>
    $(document).ready(function () {
      $('carrossel-imagens').slick();
    })
  </script>
 */
//PARA ADICIONAR O COMPORTAMENTO DE AUTO PLAY TEMOS QUE ADICIONAR
/**
 <script>
    $(document).ready(function () {
      $('carrossel-imagens').slick({
        autoplay: true,
      });
    })
  </script>
 */
//PROBLEMA >> INCLUIMOS O CORROSSEL NAS IMAGENS MAS DEU UM PROBLEMA E APARECEU UMA BARRA DE ROLAGEM, PODEMOS RESOLVER ISSO
//NO CSS
/**
 VAMOS RESOLVER ESSE PROBLEMA NO CSS, NA TAG GERAL html NOS VAMOS INCLUIR

 html{
  overflow-x:hidden;
 }

 PORTANTO TODO CONTEUDO QUE ULTRAPASSAR O LIMITE DA TELA NÃO VAI SER VISIVEL
 */

//CONSTRUÇÃO DO MENU HAMBURGUER
//nav> display:none
//COMO ESTAMOS USANDO O jquery DENTRO DE UM SCRIPT NO HTML, LA VAMOS SELECIONAR O menu-hamburguer E COLOCAR FUNÇÃO slideToggle
/**
 $('.menu-hamburguer').click(function(){
    $('nav').slideToggle
 })
 */
//slideToggle >ELE VERIFICA SE O MENU ESTA ATIVO, SE NÃO ESTIVER ELE ATIVA E SE ESTIVER ELE DESATIVA

//QUERY MASK PLUGIN, VAMOS UTILIZAR ESSE PLUGIN PARA COLOCAR MASCARAS EM NOSSO FORMULÁRIO. http://igorescobar.github.io/jQuery-Mask-Plugin/
//TEMOS QUE REALIZAR O DOWNLOAD DO ARQUIVO ZIP E BRINDO TEMOS ALGUMAS INFORMAÇÕES QUE SÃO COMUNS A TODOS OS PLUGINS
//NA ORGANIZAÇÃO DE DE PLUGINS E BIBLIOTECAS, NA PASTA /src TEMOS O CÓDIGO FONTE QUE FOI ESCRITO(CÓDIGO LEGIVEL), ESTE ARQUIVO PODEMOS EXPLORAR E DESCOBRIR COMO O AUTOR ESCREVEU ESSE PLUGIN

// EM /dist TEMOS O ARQUIVO PRONTO PARA USO E PRODUÇÃO, ESTE ARQUIVO É MENOR E NÃO É LEGIVEL. NO CASO ESPECÍFICO TEMOS DOIS ARQUIVOS NESSA PÁGINA, jquery.mask E jquery.mask.min, O min É DE MINIFICADO, É UM ARQUIVO MENOR, VAMOS ESCOLHER O MENOR ARQUIVO, CRIAR UMA PASTA NO NOSSO PROJETO CHAMADA js E COLAR O ARQUIVO

//DA MESMA FORMA QUE ADICIONAMOS OS OUTROS VAMOS ADICIONAR NO NOSSO CÓDIGO HTML O PLUGIN EM UMA LINHA DE script
//<script src="./js/jquery.mask.min.js"></script>
/**
EXEMPLO DE UTILIZAÇÃO
 $('#telefone').mask('00/00/0000', {
        placeholder: '__/__/_____'
      })

      SEMPRE DEPOIS DO SELETOR COLOCAR .mask E DEPOIS O FORMATO COM OPÇÃO DE COLOCAR UM PLACEHOLDER, 000000 É O LIMITADOR QUE PODE SÓ NUMERO, SE TIVER LETRA TEMOS QUE COLOCAR SSS
      EX:00/SS/0000, NO ESPAÇO ONDE TEM SS PODE SOMENTE LETRA
      
      
      LEMBRAR QUE TEM QUE SER DENTRO DO $(document).ready(function(){

      })
      PARA O JQUERY FUNCIONAR
 */

//VALIDAÇÃO DE FORMULÁRIOS COM O JQUERY, VAMOS UTILIZAR O PLUGIN https://jqueryvalidation.org/
//MESMO ESQUEMA DE INSTAÇÃO, QQ DÚVIDA OLHAR O PDF OU O GITHUB DO PLUGIN
//ESTE PLUGIN TEM SUA SINTAXE ESPECIFICA E TRABALHA COM O NOME DOS CAMPOS, PORTANTO OS inputs TEM QUE TER O nome
//PODEMOS PERSONALIZAR A MENSAGEM QUE É ENVIADA PARA O USUARIO
//PODEMOS INTERCEPTAR O ENVIO DO FORMULÁRIO E VERIFICAR SE ESTA TUDO CORRETO COM O ENVIO submitHandler:
/*
submitHandler:function(form){
  console.log(form)
},
invalidHandler: function(evento, validador){
  let camposIncorretos = validador.numberOfInvalids();
  console.log(camposIncorretos)
}
*/

/**
invalidHandler: function(evento, validador){
  let camposIncorretos = validador.numberOfInvalids();
  console.log(camposIncorretos)
}

  TEMOS QUE AO ENVIAR UM FORMULÁRIO ELE RETORNA O NUMERO DE CAMPOS INVÁLIDOS, NO NOSSO CASO COLOCAMOS 3 CAMPOS COM .validate, PODEMOS FAZER UMA LÓGICA COM ISSO
 */

/**
    AQUI SELECIONAMOS O BUTTON CLICADO E COLOCAMOS QUE O DESTINO DESSE CLIQUE SERÁ A section QUE TEM O id=contato
    $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

      AQUI TEMOS A FUNCIONALIDADE PARA EXTRAIR DO BUTTON CLICADO O H3 PARA JOGAR NO FORMULÁRIO
    const nomeVeiculo = $(this).parent().find("h3").text();
     
    AQUI JOGAMOS O VALOR PARA O INPUT, PORTANTO O val SERVE TANTO PARA EXTRAIR VALOR COMO PARA ATRIBUIR VALOR
     $("#veiculo-interesse").val(nomeVeiculo);

    AQUI TEMOS A ANIMÇÃO DA PÁGINA, E TEMPO DE ANIMAÇÃO
    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
   */
