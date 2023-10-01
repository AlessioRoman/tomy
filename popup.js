let minuteDisplay = document.getElementById("minutes");
let secondDisplay = document.getElementById("seconds");
let pomodoroBtn = document.getElementById("pomodoro");
let shortBtn = document.getElementById("short");
let longBtn = document.getElementById("long");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

window.onload = () => {
  setPomodoro();
};

function setPomodoro() {
  minuteDisplay.innerHTML = "25";
  secondDisplay.innerHTML = "00";
}

function setShort() {
  minuteDisplay.innerHTML = "05";
  secondDisplay.innerHTML = "00";
}

function setLong() {
  minuteDisplay.innerHTML = "15";
  secondDisplay.innerHTML = "00";
}

function start() {
  let timerFunction = () => {
    let min = parseInt(minuteDisplay);
    let sec = parseInt(secondDisplay);

    sec = sec - 1;

    if (sec === 0) {
      min = min - 1;

      sec = 59;
    }
  };

  setInterval(timerFunction, 1000);
}
