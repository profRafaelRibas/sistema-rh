// --- Lógica da Imagem no Hover ---

const imgElemento = document.getElementById('imgDinamica');

function alterarImagem(nome) {
  imgElemento.src = `img/${nome}.png`; // Atualiza o src da imagem para a nova imagem com base no nome fornecido
}
