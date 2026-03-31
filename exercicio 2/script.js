function calcular() {
  // 1. Pegar o valor do salário
  const salarioAtual = Number(document.getElementById('salarioAtual').value);

  // Validação: se o salário não for preenchido, avisa o usuário
  if (salarioAtual <= 0 || isNaN(salarioAtual)) {
    alert("Por favor, insira um salário válido.");
    return;
  }

  // 2. Determinar o percentual de aumento conforme a faixa salarial
  let percentualAumento;
  
  if (salarioAtual <= 1200.00) {
    percentualAumento = 16;
  } else if (salarioAtual <= 2100.00) {
    percentualAumento = 13;
  } else if (salarioAtual <= 3000.00) {
    percentualAumento = 10;
  } else {
    percentualAumento = 5;
  }

  // 3. Calcular novo salário
  // Novo salário = Salário Atual * (1 + percentual/100)
  const novoSalario = salarioAtual * (1 + percentualAumento / 100);

  // 4. Exibir o resultado formatado em Moeda Real (BRL)
  const displayResultado = document.getElementById('resultado');
  displayResultado.innerText = novoSalario.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}