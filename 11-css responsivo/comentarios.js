//VIEWPORT
//TEMOS A tag  <meta name="viewport" content="width=device-width, initial-scale=1.0"> QUE FICA NO HEADER POR PADRÃO
//PODEMOS ACESSAR PELO DEVTOOLS, O VIEWPORT É TODOD CONTEUDO VISIVEL DO MEU CONTEUDO, VAMOS ENTENDER A TAG QUE É PADRÃO
/**
 <meta name="viewport" content="width=device-width, initial-scale=1.0">

 content="width=device-width > AQUI TEMOS QUE A LARGURA DO VIEWPORT(CONTEUDO VISIVEL) VAI SER  = LARGURA DO DISPOSITIVO

 initial-scale=1.0 > AQUI TEMOS A ESCALA, COMO ESTA 1(100%) NÃO TEM ZOOM NA TELA, MAS A PESSOA PODE ALTERAR DURANTE A NAVEGAÇÃO
 */

/**
  OUTRAS UNIDADES DE MEDIDA
  VIEWPORT WIDTH > VW, AQUI POR EXEMPLO SE COLOCARMOS width: 100vw; ELE VAI OCUPAR 100% DA MINHA LARGURA

  VIEWPORT HEIGTH > VH, AQUI TEMOS A ALTURA E FUNCIONA NA MESMA LÓGICA

  ***** ATENÇÃO *****
  PODEMOS TER ALGUNS PROBLEMAS COM ESSAS MEDIDAS, POIS PODE QUEBRAR NOSSO LAYOUT
  */

/**
   PODEMOS ADICIONAR A tag VIEWPORT UMA OUTRA PROPRIEDADE: user-scalable=no, ELE PODE BLOQUEAR O ZOOM DA NOSSA PÁGINA, user-scalable=yes TORNA O SITE MAIS ACESSIVEL.
   
   maximum-scale=1 > TRAVA O MÁXIMO DE ZOOM QUE O USUARIO PODE DAR

   minimum-scale=0.5 > LIMITA O MAXIMO DE ZOOM QUE CONSEGUIMOS DIMINUIR
   */

/**
    AULA 2 - UNIDADES FLEXIVEIS DE MEDIDAS
    
    TEMOS UNIDADES DE MEDIDA FIXAS E FLEXIVÉIS

    FIXAS > SÃO px, pt(1pt = 1/72 de uma polegada)

    FLEXIVEIS > %, vh, vw, em

    em > EQUIVALE AO TAMANHO DA FONTE DO ELEMENTO PAI, E POR CONVENÇÃO O TAMANHO DA FONTE DA tag body, É 16PX, PORTANTO 1em = 16px; 2em = 16 x 2, PARA AS tags QUE SÃO FILHAS DIRETAS DO body, SE FOR FILHA DIRETA DE OUTRA TAG, ESSA RELAÇÃO MUDA

    % > 100% MANTEM O TAMANHO DA FONTE, É BOM PARA AUMENTAR A FONTE DE FORMA PROPORCIONAL EM TODO O CONTEUDO
    */

/**
     AULA 3 - BREAKPOINTS

     @media screen and (max-width:640px){
      REGRA VAI SER APLICADA ATÉ QUANDO A TELA ESTIVER COM MAX-WIDTH DE 640PX
     }

     SE FOSSE @media screen and(min-width:1000px){
      REGRA INICIA ASSIM QUE A TELA ATINGIR 1000PX
     }


     AGORA PODEMOS TRATAR SE O DISPOSITIVO ESTÁ NA HORIZONTAL OU NA VERTICAL
     @media screen and(orientation: portrait(vertical) OU landscape(horizontal))


     PODEMOS TER MAIS DE UMA REGRA JUNTAS POR EXEMPLO

     @media screen and(orientation: portrait) and (max-width: 640px){
      back-ground:black;
     }

     PODEMOS UTILIZAR PARA IMPRIMIR TELA, SÓ SE APLICA SE FOR IMPRIMIR
     @media print {
      h3{
        color:red
      }
     }
     */

/**
      AULA 4 - IMAGENS
      <picture>
      <source media='(max-width: 400px)' srcset='OUTRA IMAGEM'
      <source media='(min-width: 1280px)' srcset='NOVA FOTO PARA A RESOLUÇÃO'
      <img scr='ENDEREÇO DA IMAGEM'>
      </picture>


      OUTRA FORMA É ATRAVES DO CSS
      TEMOS QUE TER UMA div NO HTML APÓS ISSO VAMOS NO CSS E DIGITAMOS O SEGUINTE CÓDIGO:
      div{
        background-image:url(endereço sem aspas)
        TEMOS QUE ESPECIFICAR O TAMANHO
        height: 500px
        width:100%
        PARA NAO REPETIR A IMAGEM
        background-repeat: no-repeat
        PARA REDIMENCIONAR A IMAGEM TEMOS
        background-size: cover
      }
      */
