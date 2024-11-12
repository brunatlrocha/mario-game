const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    // Remove a classe 'jump' após 500 milissegundos (ajuste conforme necessário)
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    if (pipePosition <= 120 && marioPosition < 80 ){

      pipe.style.animation = 'nome';  
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'nome';  
      mario.style.bottom = `${pipePosition}px`;

      mario.src = 'Image/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);
