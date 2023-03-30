//1)PARA PARAR DE RECARREGAR A PÁGINA TODA VEZ QUE CLICAMOS EM DEPOSITO
const form = document.getElementById("form-deposito");
console.log(form);

//3)FUNÇÃO QUE VAI VALIDAR SE O NOME FOI DIGITADO COMPLETAMENTE OU SÓ O PRIMEIRO NOME
function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

//2)TEMOS QUE ALTERAR O EVENTO DE SUBMIÇÃO DE FORMULÁRIO, AQUI NESSE CÓDIGO ABAIXO TODA VEZ QUE TIVER UM EVENTO DE SUBMIT NO form ELE VAI DISPARAR UMA FUNÇÃO, QUEROMOS REMOVER O RELOAD AUTOMÁTICO DO BOTAO
form.addEventListener("submit", function (e) {
  //6)
  let formEValido = false;
  e.preventDefault(); //CANCELA A AÇÃO PADRO DO SUBMIT DE RELOAD
  //4)VAMOS CRIAR UMA VARIAVEL
  const nomeBeneficiario = document.getElementById("nome-beneficiario");
  //8)VAMOS SELECIONAR AS OUTRAS INFORMAÇÕES
  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDoDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de: ${valorDoDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;
  //5)VAMOS CHAMAR A FUNÇÃO validaNome E COLOCAR:
  //validaNome(nomeBeneficiario.value)
  //O RETORNO DEVE SER UM true OU false, PRECISAMOS DAR UM RETORNO AO USUARIO SE O VALIDA NOME É INVÁLIDO, PORTANTO PODEMOS COLOCAR UM if  E VALIDAR SE ESSA INFORMAÇÃO FOR FALSA(!) COLOCANDO O SINAL DE EXCLAMAÇÃO INICIANDO A CONDIÇÃO. if (!validaNome(nomeBeneficiario.value) É O MESMO QUE A GENTE ESCREVER if (validaNome(nomeBeneficiario.value) === false
  // if (!validaNome(nomeBeneficiario.value)) {
  //   alert("O nome não está completo");
  //  } else {
  //    alert("Tudo certo");
  //7) APOS O PASSO 6 CANCELAMOS O PASSO 5 PARA REESTRUTURAR O CÓDIGO E REESCREVER DE UMA OUTRA FORMA
  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    alert(mensagemSucesso);
    //9)AGORA VAMOS LIMPAR OS CAMPOS CASO O DEPOSITO TENHA SUCESSO
    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDoDeposito.value = "";
  } else {
    alert("Digite o nome completo");
  }
});
