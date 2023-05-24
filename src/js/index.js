const botoesSlider = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoesSlider.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    desativarImagemAtiva();

    selecionarBotao(botao);
    mostrarImagemAtiva(indice);
  });
});

function selecionarBotao(botao) {
  botao.classList.add("selecionado");
}

function mostrarImagemAtiva(indice) {
  imagens[indice].classList.add("ativa");
}

function desativarImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
