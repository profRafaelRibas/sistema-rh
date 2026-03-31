function calcular() {
  // 1. Pegar os valores dos campos de entrada
  const qtdPessoas = Number(document.getElementById('qtdPessoas').value);
  const diasUteis = Number(document.getElementById('diasUteis').value);

  // Validação: se os campos não forem preenchidos corretamente, avisa o usuário
  if (qtdPessoas <= 0 || isNaN(qtdPessoas) || diasUteis <= 0 || isNaN(diasUteis)) {
    alert("Por favor, insira valores válidos para quantidade de colaboradores e dias úteis.");
    return;
  }

  // 2. Determinar o valor por pessoa/dia conforme a faixa
  let valorDia;
  
  if (qtdPessoas >= 1 && qtdPessoas <= 49) {
    valorDia = 4.50;
  } else if (qtdPessoas >= 50 && qtdPessoas <= 99) {
    valorDia = 4.10;
  } else if (qtdPessoas >= 100 && qtdPessoas <= 149) {
    valorDia = 3.80;
  } else if (qtdPessoas >= 150) {
    valorDia = 3.60;
  }

  // 3. Calcular o custo mensal
  // Custo Mensal = Quantidade de Pessoas * Valor por Dia * Dias Úteis
  const custoMensal = qtdPessoas * valorDia * diasUteis;

  // 4. Exibir o resultado formatado em Moeda Real (BRL)
  const displayResultado = document.getElementById('resultado');
  displayResultado.innerText = custoMensal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}