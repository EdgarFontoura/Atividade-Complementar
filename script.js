/*
  Esse é o JavaScript que faz a calculadora funcionar.
  Usei o VS Code também aqui, por ser ótimo pra depurar e testar os scripts.

  Além disso, apliquei dois princípios SOLID pra deixar o código mais organizado e fácil de manter:

  - SRP (Responsabilidade Única): cada função faz só uma coisa. Isso ajuda muito se precisar mexer no futuro.
  - OCP (Aberto/Fechado): a função das operações científicas aceita qualquer nome de função do Math,
    então dá pra adicionar novas sem ter que mudar o código de dentro.
*/

// Essa função insere os números e operadores no visor
function insert(valor) {
  document.getElementById('display').value += valor;
}

// Essa só limpa o visor
function limpar() {
  document.getElementById('display').value = '';
}

// Essa faz o cálculo de tudo o que foi digitado
function calcular() {
  try {
    const resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
  } catch {
    document.getElementById('display').value = 'Erro';
  }
}

// Essa é uma função inteligente que aplica funções científicas automaticamente,
// como sen, cos, raiz... sem precisar criar uma função separada pra cada uma.
function func(nomeFuncao) {
  try {
    const display = document.getElementById('display');
    const valor = eval(display.value);
    const resultado = eval(`${nomeFuncao}(${valor})`);
    display.value = resultado;
  } catch {
    display.value = 'Erro';
  }
}
