function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); // Quantidade de números que devem ser sorteados.
    let de = parseInt(1); // Valor mínimo do sorteio.
    let ate = parseInt(60); // Valor máximo do sorteio.

    if (de >= ate) { // Verifica se o valor mínimo é maior ou igual ao valor máximo.
        alert('O valor "Do número" deve ser menor que o valor "Até o número".'); // Exibe um alerta se a condição for verdadeira.
        return; // Interrompe a execução da função se a condição for verdadeira.
    }

    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números sorteados não pode ser maior que o intervalo entre os valores "Do número" e "Até o número".'); // Exibe um alerta se a quantidade for maior que o intervalo.
        return; // Interrompe a execução da função se a condição for verdadeira.
    }

/* Coferindo se os valores adicionados estão ok.
    alert(
        'Sorteando ' + quantidade + ' números entre ' + de + ' e ' + ate + '...'
    );
*/

    let numerosSorteados = []; // Array para armazenar os números sorteados.
    let numero; // Variável para armazenar o número sorteado.

    // Verifica se a quantidade é maior que 0 e se o valor mínimo é menor que o valor máximo.
    for (let i = 0; i < quantidade; i++) {
        while (true) { // Loop para garantir que o número sorteado não seja repetido.
            numero = obterNumerosAleatorios(de, ate); // Sorteia um número aleatório entre 'de' e 'ate'.
            if (!numerosSorteados.includes(numero)) { // Verifica se o número já foi sorteado.
                break; // Se não foi sorteado, sai do loop.
            }
        }
        // Se o número já foi sorteado, continua o loop até encontrar um novo número.
        numerosSorteados.push(numero); // Adiciona o número sorteado ao array.
    }
  
    numerosSorteados.sort((a, b) => a - b); // Ordena os números em ordem crescente

    let resultado = document.getElementById('resultado');// Variável para armazenar o resultado final.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(', ')}</label>`; // Exibe os números sorteados na tela.

   // alterarStatusBotao(); // Chama a função para alterar o status do botão.

}

function obterNumerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Função que retorna um número aleatório entre o valor mínimo e máximo.
}

/*
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar'); // Obtém o botão reiniciar.
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado'); // Remove a classe que desabilita o botão.
        botao.classList.add('container__botao'); // Adiciona a classe que habilita o botão.
    } else {
        botao.classList.remove('container__botao'); // Remove a classe que habilita o botão.
        botao.classList.add('container__botao-desabilitado'); // Adiciona a classe que desabilita o botão.
    }
}
*/

/*
function reiniciar() {
    let resultado = document.getElementById('resultado'); // Obtém o elemento onde os resultados são exibidos.
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum número sorteado.</label>'; // Exibe a mensagem padrão de nenhum número sorteado.

    document.getElementById('quantidade').value = ''; // Limpa o campo de quantidade.
    document.getElementById('de').value = ''; // Limpa o campo de valor mínimo.
    document.getElementById('ate').value = ''; // Limpa o campo de valor máximo.

    alterarStatusBotao(); // Chama a função para alterar o status do botão.
}
*/