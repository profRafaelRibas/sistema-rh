// --- Lógica de Data e Hora ---

function atualizarRelogio() {
    // Pega a data atual usando a classe Date do JavaScript. A classe Date é uma parte fundamental do JavaScript para lidar com datas e horas. Quando você cria uma nova instância de Date sem argumentos, ela automaticamente captura a data e hora atuais do sistema.
  const agora = new Date();

    // 1. Formatar Data (Padrão Brasil: Terça-feira, 24 de março de 2026)
    // Opções para o toLocaleDateString recebem um objeto com as partes da data que queremos exibir. Um objeto em JavaScript é definido usando chaves {} e pode conter várias propriedades. No caso do toLocaleDateString, as propriedades comuns incluem:
    // weekday: 'long' (exibe o dia da semana por extenso, ex: "terça-feira") ou 'short' (exibe o dia da semana abreviado, ex: "ter")
    // year: 'numeric' (exibe o ano com quatro dígitos, ex: "2026") ou '2-digit' (exibe o ano com dois dígitos, ex: "26")
    // month: 'long' (exibe o mês por extenso, ex: "março") ou 'short' (exibe o mês abreviado, ex: "mar") ou 'numeric' (exibe o mês como número, ex: "3")
    // day: 'numeric' (exibe o dia do mês como número, ex: "24") ou '2-digit' (exibe o dia do mês com dois dígitos, ex: "24")
  const opcoesData = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  // O toLocaleDateString já cuida da tradução e fuso horário. Ele formata a data de acordo com as opções fornecidas e o idioma especificado ('pt-BR' para português do Brasil). O resultado é uma string formatada que pode ser exibida diretamente na página.
  document.getElementById('dataAtual').innerText = 
    agora.toLocaleDateString('pt-BR', opcoesData);

    // 2. Formatar Hora (00:00:00)
    // O toLocaleTimeString é semelhante ao toLocaleDateString, mas é usado para formatar a parte de tempo (horas, minutos, segundos). Ele também aceita um objeto de opções para personalizar o formato da hora. As opções comuns incluem:
    // hour: '2-digit' (exibe a hora com dois dígitos, ex: "08") ou 'numeric' (exibe a hora sem zero à esquerda, ex: "8")
    // minute: '2-digit' (exibe os minutos com dois dígitos, ex: "05") ou 'numeric' (exibe os minutos sem zero à esquerda, ex: "5")
    // second: '2-digit' (exibe os segundos com dois dígitos, ex: "09") ou 'numeric' (exibe os segundos sem zero à esquerda, ex: "9")               
  const horaFormatada = agora.toLocaleTimeString('pt-BR');
  document.getElementById('horaAtual').innerText = horaFormatada;
}

// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Executa uma vez ao carregar para não esperar 1 segundo
atualizarRelogio();


// --- Lógica da Imagem no Hover ---

const imgElemento = document.getElementById('imgDinamica');
const imgPadrao = "https://via.placeholder.com/300/3f3f46/FFFFFF?text=Sistema";

function alterarImagem(url) {
  imgElemento.src = url;
}

function resetarImagem() {
  imgElemento.src = imgPadrao;
}