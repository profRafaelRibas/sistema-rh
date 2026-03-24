function calcular() {
  // 1. Pegar os valores dos campos de entrada
  const salarioBruto = Number(document.getElementById('salario').value);
  const qtdHoras50 = Number(document.getElementById('horas50').value) || 0;
  const qtdHoras100 = Number(document.getElementById('horas100').value) || 0;

  // Validação simples: se o salário não for preenchido, avisa o usuário
  if (salarioBruto <= 0 || isNaN(salarioBruto)) {
    alert("Por favor, insira um salário válido.");
    return;
  }

  // 2. Lógica de cálculo
  // Valor da hora comum (baseado em 200h por mês)
  const valorHoraComum = salarioBruto / 200;

  // Valor da hora com acréscimo de 50% (multiplica por 1.5)
  const valorHora50 = valorHoraComum * 1.5;

  // Valor da hora com acréscimo de 100% (multiplica por 2)
  const valorHora100 = valorHoraComum * 2;

  // Cálculo total das horas extras
  const totalHorasExtras = (qtdHoras50 * valorHora50) + (qtdHoras100 * valorHora100);

  // 3. Exibir o resultado formatado em Moeda Real (BRL)
  const displayResultado = document.getElementById('resultado');
  displayResultado.innerText = totalHorasExtras.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}