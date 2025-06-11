const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
const powerButton = document.getElementById('power');
const resetButton = document.getElementById('reset');
const markButton = document.getElementById('mark');

let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${hundredths.toString().padStart(2,'0')}`;
};

const setTimer = (time) => {
    timerEl.innerText = formatTime(time);
};

const toggleTimer = () => {
    const action = powerButton.getAttribute('action');

    clearInterval(intervalId);

    if (action === 'start' || action === 'continue') {
        intervalId = setInterval(() => { 
            timer += 1;
            setTimer(timer);
        }, 10);
        powerButton.setAttribute('action', 'pause');
        powerButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action === 'pause') {
        powerButton.setAttribute('action', 'continue');
        powerButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
};

const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0;
    setTimer(timer);
    powerButton.setAttribute('action', 'start');
    powerButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    marksList.innerHTML = '';
    marks = [];
};

const markTime = () => {
    if (timer === 0) return; // não marca se o cronômetro não tiver iniciado

    const mark = formatTime(timer);
    marks.push(mark);

    const markItem = document.createElement('div');
    markItem.innerText = `Marca ${marks.length}: ${mark}`;
    marksList.appendChild(markItem);
};

// Eventos
powerButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);
markButton.addEventListener('click', markTime);
