const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

function limpaFormulario() {
  document.getElementById("nome-beneficiario").value = "";
  document.getElementById("numero-conta").value = "";
  document.getElementById("valor-deposito").value = "";
}

function enviarFormulario(e) {
  e.preventDefault();

  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDoDeposito = document.getElementById("valor-deposito");

  const mensagemSucesso = `Montante de: <b>${valorDoDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta:<b> ${numeroContaBeneficiario.value}</b>`;

  const formularioValido = validaNome(nomeBeneficiario.value);

  if (formularioValido) {
    //')alert(mensagemSucesso); VAMOS TROCAR O ALERT POR UMA MENSAGEM DENTRO DO HTML
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    limpaFormulario();
  } else {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
}

form.addEventListener("submit", enviarFormulario);

nomeBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
});
