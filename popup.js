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

startBtn.addEventListener("click", start);

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

function timerFunction(min, sec) {
  sec -= 1;

  console.log(sec);

  if (sec === 0) {
    sec = 59;
    if (min < 0) {
      //alert
    } else {
      min -= 1;
    }
  }

  minuteDisplay.innerHTML = String(min);
  secondDisplay.innerHTML = String(sec);
}

function start() {
  let mins = parseInt(minuteDisplay);
  let secs = parseInt(secondDisplay);

  setInterval(timerFunction(mins, secs), 1000);
}
