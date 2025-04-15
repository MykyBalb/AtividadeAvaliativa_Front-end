window.onload = () => {
    document.querySelector('#reload').addEventListener('submit', event => {event.preventDefault()});
    const acao = document.querySelector('#calcularNumeros');
    acao ? acao.addEventListener('click', processarInput) : alert('Erro ao realizar o calculo');
}

const processarInput = () => {
    let primeiroNumero;
    let segundoNumero;
    const num1 = document.querySelector('#numero1');
    const num2 = document.querySelector('#numero2');

    if(!num1 instanceof HTMLInputElement || !num2 instanceof HTMLInputElement) {
        alert("Não foi possível checar a DOM");
        return;
    }
    if((num1.value === '' || num2.value === '') || (num1.value === num2.value)) {
        alert("Valores iguais ou inexistentes!");
        return;
    }

    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);

    if(numero1 > numero2) {
        primeiroNumero = num1.value;
        segundoNumero = num2.value;
    } else {
        primeiroNumero = num2.value;
        segundoNumero = num1.value;
    }
    console.log(primeiroNumero, segundoNumero);

    calcularNumeros(primeiroNumero, segundoNumero);
    num1.value = '';
    num2.value = '';
}

const calcularNumeros = (numMaior, numMenor) => {
    let contador = 0;
    let mensagem;
    for(let i = numMenor; i <= numMaior; i++) {
        if(i%5 == 0) {
            contador+=1;
        }
    }
    mensagem = contador;
    mostrarMensagem(mensagem);
}

const mostrarMensagem = mensagem => {
    const saida = document.querySelector('#saida');
    saida ? saida.textContent = `A quantidade de múltiplos de 5 é: ${mensagem}` : alert("Erro ao mostrar resultado. Por favor, tente novamente");
}