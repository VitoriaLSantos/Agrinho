document.addEventListener('DOMContentLoaded', () => {

    const botaoInterativo = document.querySelector('#btnInterativo');

    if (botaoInterativo) {

        botaoInterativo.addEventListener('click', () => {
            exibirMensagemSucesso();
        });

    }

});

function exibirMensagemSucesso() {
    alert('Incrível! Você está vendo a lógica separada da estrutura.');
    console.log('Interação realizada com sucesso no projeto Agrinho 2026.');
}