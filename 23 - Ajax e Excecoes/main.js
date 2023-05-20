document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn-buscar-cep")
    .addEventListener("click", function () {
      const cep = document.getElementById("cep").value;
      const endpoint = `https://viacep.com.br/ws/${cep}/json`;

      fetch(endpoint)
        .then(function (resposta) {
          return resposta.json();
        })
        .then(function (json) {
          const logradouro = json.logradouro;
          const bairro = json.bairro;
          const cidade = json.localidade;
          const estado = json.uf;
          const endereco = `${logradouro}, ${bairro} - ${cidade}-${estado}`;

          document.getElementById("endereco").value = endereco;
        })
        .catch(function (erro) {
          alert("ocorreu um erro ao buscar o endereço, tente mais tarde");
        })
        .finally(function () {});
    });
});
