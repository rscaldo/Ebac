//PRECISAMOS BAIXAR O JQUERY NO SITE jquery.com, CLICAR NO PRIMEIRO LINK QUE VAI ABRIR UMA PÁGINA COM VÁRIOS CÓDIGOS, COPIAMOS O URL DA PAGINA E COLOCAMOS NO NOSSO HTML COM A TAG script,
//<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
//TEMOS QUE INCLUIR APÓS ESSA TAG O NOSSO ARQUIVO JS
//PARA VER SE O jquery ESTA FUNCIONANDO TEMOS QUE ESCREVER O SEGUINTE COMANDO:
/**
 * 
 $(document).ready(function () {
  alert("Olá Jquery");
});

*/
//TUDO QUE FOR UTILIZAR DE JQUERY TEM QUE ESTAR DENTRO DESSE ESCOPO
//VAMOS FAZER UM EXEMPLO SELECIONANDO O BUTTON NO HEADER
/**
 document.querySelector('header button'); 
 */

//AGORA COMO FICARIA NO JQUERY
$(document).ready(function () {
  console.log($("header button"));
});
//PODEMOS COLOCAR QUALQUER TIPO DE SELETOR DENTRO DO JQUERY
//O RETORNO DE UM console.log DESSE COMANDO SERIA: S.fn.init [button, prevObject: S.fn.init(1)]
//AGORA TEMOS QUE ADICIONAR UM EVENTO DE CLIQUE, A FUNÇÃO QUE EXECULTA COMO ARGUMENTO DE OUTRA FUNÇÃO ELA É CHAMADA DE CALLBACK, PARA ADICONAR UM EVENTO DE CLIQUE TEMOS 2 FORMAS:
$("header button").click(function () {
  $("form").slideDown(); //ACRESCENTA A TAG FORM QUE ESTA COMO DISPLAY NONE NO CSS, COLOCAMOS slideDown PARA IR DE CIMA PARA BAIXO
});
$("#botao-cancelar").click(function () {
  $("form").slideUp();
});

//OUTRA FORMA
$("form").on("submit", function (e) {
  e.preventDefault();
  //1)
  const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
  //2)
  const novoItem = $("<li style='display:none'></li>");
  $(`<img src='${enderecoDaNovaImagem}'/>`).appendTo(novoItem);
  $(`
  <div class='overlay-imagem-link'>
    <a href='${enderecoDaNovaImagem}' target='_blank' title='Ver imagem em tamanho real'>
    Ver imagem em tamanho real
    </a>
  </div>
  
  `).appendTo(novoItem);
  $(novoItem).appendTo("ul");
  $(novoItem).fadeIn(500);
  $("#endereco-imagem-nova").val("");
});

//ADICIONAR FOTOS
//1)TEMOS QUE SELECIOLAR O INPUT COLOCANDO UM ID NO HTML, E COLOCAR DENTRO DO PULLBACK DO SUBMIT, PARA RECUPERAR O VALOR NO JS COLOCARIAMOS .value MAS NO JQUERY COLOCAMOS .val()
//2)AGORA TEMOS QUE CRIAR O ELEMENTO HTML QUE VAI SER INSERIDO NO ELEMENTO, VAMOS UTILIZAR O JQUERY, VAMOS USAR A FUNÇÃO appendTO(), ELE VAI PEGAR ESSE ELEMENTO <img src='${enderecoDaNovaImagem}'/> E INSERIR DENTRO DA ABERTURA DO <li>
