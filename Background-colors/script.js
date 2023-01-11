const listaDeBotoes = document.querySelectorAll('#btn');
const background = document.getElementById('background');

listaDeBotoes.forEach((botao)=> {
    botao.addEventListener('click', ()=> {
        mudaCorBackground(botao)
    })
})

function mudaCorBackground(botao) {
    classBotao = botao.className;

    background.classList.add(classBotao);
}