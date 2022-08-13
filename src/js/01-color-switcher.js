const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const INTERVAL_CHANGE = 1000;

btnStart.disabled = false;
btnStop.disabled = true;
let idInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function start() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  idInterval = setInterval(() => {
    changeColor();
  }, INTERVAL_CHANGE);
}

function stop() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(idInterval);
}

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);
