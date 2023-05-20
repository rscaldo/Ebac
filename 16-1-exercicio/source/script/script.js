// Selecionar todos os botões "Expandir Imagem"
const expandirImagem = document.querySelectorAll(".galeria-item a");

// Adicionar evento de clique para cada botão
expandirImagem.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão

    // Selecionar o elemento da imagem correspondente
    const imagem = event.target.previousElementSibling;

    // Exibir o atributo "alt" da imagem selecionada em um alerta
    alert(imagem.alt);
  });
});
