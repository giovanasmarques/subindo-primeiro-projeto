const mario = document.querySelectorAll('.mario');
const pipe = document.querySelectorAll('.pipe');

const pula = () => {

    mario.classList.add('pula');

    setTimeout(() => {
        mario.classList.remove('pula');
    }, 500);
}

const loop = setInterval(() => {
// offsetLeft é p deslocamento esquerdo do pipe
// getComputedStyle é p/ pegar o estilo computado na imagem do mario  e assim conseguir pegar qualquer propriedade css que estiver aplicado a ele.
    console.log('loop')

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
const tela = () => {}
    if (pipePosition < 120 && marioPosition < 80){
        alert("fim de jogo irma!");
    }


}, 10);

document.addEventListener('keydown', jump);
 