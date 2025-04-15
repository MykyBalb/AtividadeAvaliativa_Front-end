let listaCompras = [];
window.onload = () => {
    document.querySelector('#reload').addEventListener('submit', event => {event.preventDefault()});
    const carrinho = document.querySelector('#calcularCarrinho');
    const finalizarCarrinho = document.querySelector('#finalizar');
    finalizarCarrinho ? finalizarCarrinho.addEventListener('click', finalizarCompra) : alert('Erro ao validar elementos');
    carrinho ? carrinho.addEventListener('click', processarInput) : alert('Erro ao validar elementos');
}

const processarInput = () => {
    let quantidade;
    let preco;
    const quantidadeInput = document.querySelector('#quantidade');
    const precoInput = document.querySelector('#preco');

    if (!(quantidadeInput instanceof HTMLInputElement) || !(precoInput instanceof HTMLInputElement)) {
        alert('Erro ao processar inputs');
        return;
    }

    quantidade = Number(quantidadeInput.value);
    preco = parseFloat(precoInput.value);

    if(quantidadeInput.value === '' || precoInput.value === '' || quantidade < 0 || preco < 0) {
        alert("Por favor, preencha com valores válidos maiores que zero");
        return;
    }


    processarSelect(quantidade, preco);
}

const processarSelect = (quantidade, preco) => {
    const valor = document.querySelector('#selecao');
    if(!(valor instanceof HTMLSelectElement)) {
        alert('Erro ao processar select');
        return;
    }

    calcularCarrinho(valor, quantidade, preco);
}

const calcularCarrinho = (valor, quantidade, preco) => {
    let totalUnitario = quantidade * preco;

    listaCompras.push(totalUnitario);    
    mostrarCarrinho(valor, quantidade, preco)
}

const mostrarCarrinho = (valor, quantidade, preco) => {
    let saida = document.querySelector('#saida');
    if(!saida) {
        return;
    }

    let li = document.createElement('li');
    li.textContent = `${valor.value} - quantidade: ${quantidade} - preço: R$${preco} - Preço Total: ${quantidade * preco}`;
    saida.appendChild(li);
}

const finalizarCompra = () => {
    if(!window.confirm('Você deseja finalizar sua compra?')) {
        return;
    }
    let saida = document.querySelector('#saidaCompra');
    let soma = 0;
    for(let i = 0; i < listaCompras.length; i++) { //Não lembro qual função faz com que some todos os indices(só sei que tem no python)
        soma += listaCompras[i];
    }

    saida ? saida.insertAdjacentHTML('beforeend', `Seu valor total deu: R$${soma}`) : alert('Erro ao mostrar resultado');
    limparDados();
}

const limparDados = () => {
    let carrinhoCompras = document.querySelector('#saida');
        if(carrinhoCompras instanceof HTMLDivElement) {
            carrinhoCompras.innerHTML = ''; //tentei limpar o carrinho, mas não consegui
        }
    listaCompras = [];
}