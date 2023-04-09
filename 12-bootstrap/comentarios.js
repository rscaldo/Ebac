//BOOTSTRAP
/**
 1> TEMOS QUE ACESSAR O LINK DO BOOTSTRAP https://getbootstrap.com/, IR EM READ THE DOCUMENTS > CDN LINKS > COPIAR ENDEREÇO DO CAMINHO DO CSS E COLAR EM UMA TAG LINK DE CSS NO HEAD
 https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css


 AULA 2
 TRABALHANDO COM GRID
 VAMOS UTILIZAR AS CLASSES DO BOOTSTRAP PARA CRIAR TABELAS
 1> TEMOS QUE ENVOLVER TUDO EM UMA div de class container, AS CLASSES SÃO BEM IMPORTANTES NO BOOTSTRAP, TUDO DENTRO DA TAG div
 class = 'row' para criar linha
 class = 'col' para criar colunas

 O BOOTSTRAP TRABALHA COM 12 COLUNAS, ISSO É IMPORTANTE POIS PODEMOS IR INDICANDO QUANTAS COLUNAS UM ELEMENTO VAI OCUPAR

 <div class="col-6">
   Coluna#1
 </div>
 AQUI VAI OCUpAR 6 COLUNAS, O MAXIMO SÃO 12 COLUNAS PORTANTO SE TIVER OUTRAS COLUNAS VÃO MUDAR DE LINHA

 TEMOS A OPÇÃO DE COLOCAR OUTRAS CLASSES COMO col-lg-6, NESSE EXEMPLO SÓ SE APLICA EM TELAS GRANDES, TEMOS A RELAÇÃO DE BREAKPOINTS NO MATERIAL DE APOIO

 PODEMOS MONTAR UM SITE DESPONSIVO COM O BOOTSTRAP
SOMENTE ADICIONANDO AS CLASSES PARA OS TIPOS DE TELA

CLASS g-0 > REMOVE O PADDING PADRÃO

PODEMOS UTILIZAR UM ATALHO PARA CONSTRUIR: .container>.row>.col*5>img+h3
AQUI TEREMOS UMA DIV CLASS CONTAINER, DENTRO TEREMOS UMA LINHA, DENTRO DESSA LINHA 5 COLUNAS E DENTRO DE CADA COLUNA UMA IMAGEM E UM H3


TIPOGRAFIA
ELE CUSTOMIZA ALGUMAS TAG BÁSICA DO HTML TAMBEM COMO: <mark></mark>
CLASS h1 > PODEMOS INCLUIR A CARACTERISTICA DO H1 EM QQ TEXTO
CLASS display-1 > VARIAÇÃO DE FONTE, TEMOS VARIAÇÃO ATÉ O display-6


AULA 4 -- TABELAS
TEM QUE SOMAR A CLASS table COM UMA OUTRA PARA DAR COR
class table > adiciona da tag table
class table-primary > azul
class table-secundary > cinza
class table-success > verde
class table-danger > vermelho
class table-warning > amarelo
class table-info > cyan
class table-ligth > cinza claro
class table-dark > preto


AULA 5 -- BOTÕES
class btn > botão do bootstrap
class btn-primary > azul
class btn-secundary > cinza
class btn-success > verde
class btn-danger > vermelho
class btn-warning > amarelo
class btn-info > cyan
class btn-ligth > cinza claro
class btn-dark > preto
class btn-link > aparencia de link

COMPBINAR COM ALGUMA OUTRA
class btn-outline-success > tira o fundo

PODEMOS AUMENTAR O TAMANHO DO BOTAO
btn-lg > botão maior
btn-md > botão medio
btn-sm > botão pequeno


AULA 6 -- ACCORDIONS
PARA UTILIZAR ESSA FUNÇÃO DO BOOTSTRAP VAMOS PRECISAR IMPORTAR O CDN DO JAVASCRIPT NO SITE DA BOOTSTRAP

ACCORDIONS > SÃO ELEMENTOS DE SITE QUE TEM PERGUNTA E RESPOSTA COM O COMPORTAMENTE DE APARECER AO CLIQUE E SUMIR AO CLIQUE

PARA 1 PERGUNTA TEMOS A CLASS show, QUE DEVE SER RETIRADA DAS OUTRAS PERGUNTAS

 <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#resposta1">Pegunta</button>
      </div>
      <div id="resposta1" class="accordion-collapse collapse show">
        <div class="accordion-body">Resposta da pergunta</div>
      </div>
    </div>
  </div>


  JAVASCRIPT DENTRO DO BOOTSTRAP QUE EXISTE NA ACCORDION
  1>SE SELECIONARMOS UM BUTTON QUE TEM O ATRIBUTO ACCORDION DO BOOTSTRAP 
  document.querySelector('button)
  DENTRO DESSA SELEÇÃO VAMOS TER UMA PROPRIEDADE .dataset
  document.querySelector('button').dataset
  TEMOS ACESSO A TODOS OS ATRIBUTOS CUSTOMIZADOS ATRAVÉS DO data-atributo(ex: data-bs-toggle="collapse" ) QUE INCLUIMOS NAS TAGS DE HTML, PODEMOS FAZER UM ATRIBUTO CUSTOMIZADO data-ebac='btn-test' 
  PODEMOS SELECIONAR UM BUTTON COM BASE NO ATRIBUTO QUE ACABAMOS DE CRIAR
  document.querySelector('button[data-ebac="btn-test"])

  AULA 7 - COLLAPSE
  APLICANDO O COLLAPSE TEMOS UM PROBLEMA DE LAYOUT QUE PODE SER CORRIGIDO NO CSS COM #preco p{width:300px}
  SE TIRARMOS O collapse-horizontal TEREMOS O ELEMENTO VINDO DE CIMA PARA BAIXO POR PADRÃO

AULA 8 - ALERTAS
VAMOS APRENDER A CRIAR ALERTAS COM O BOOTSTRAP
alert
class alert > botão do bootstrap
class alert-primary > azul
class alert-secundary > cinza
class alert-success > verde
class alert-danger > vermelho
class alert-warning > amarelo
class alert-info > cyan
class alert-ligth > cinza claro
class alert-dark > preto
class alert-link > aparencia de link

PODEMOS ADICIONAR UM BOTÃO A MSG DE ALERTA, DENTRO DA DIV QUE TEM A class alert, COLOCAMOS UM BUTTON
  <div class="alert alert-primary">
    <button class="btn-close" data-bs-dismiss='alert'></button>
    Sou uma msg de alerta
  </div>

  PARA POSICIONAR o X do fechar
  alert-dismissible


  AULA 9 -- FORMULÁRIOS

  
 */
