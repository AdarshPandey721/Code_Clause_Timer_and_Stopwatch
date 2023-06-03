var timerInterval;
var stopwatchInterval;

function startTimer() {
  var hours = parseInt(document.getElementById("timer-hours").textContent);
  var minutes = parseInt(document.getElementById("timer-minutes").textContent);
  var seconds = parseInt(document.getElementById("timer-seconds").textContent);

  timerInterval = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    document.getElementById("timer-hours").textContent = padZero(hours);
    document.getElementById("timer-minutes").textContent = padZero(minutes);
    document.getElementById("timer-seconds").textContent = padZero(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer-hours").textContent = "00";
  document.getElementById("timer-minutes").textContent = "00";
  document.getElementById("timer-seconds").textContent = "00";
}

function startStopwatch() {
  var minutes = parseInt(document.getElementById("stopwatch-minutes").textContent);
  var seconds = parseInt(document.getElementById("stopwatch-seconds").textContent);
  var milliseconds = parseInt(document.getElementById("stopwatch-milliseconds").textContent);

  stopwatchInterval = setInterval(function() {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
    }

    document.getElementById("stopwatch-minutes").textContent = padZero(minutes);
    document.getElementById("stopwatch-seconds").textContent = padZero(seconds);
    document.getElementById("stopwatch-milliseconds").textContent = padZero(milliseconds);
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("stopwatch-minutes").textContent = "00";
  document.getElementById("stopwatch-seconds").textContent = "00";
  document.getElementById("stopwatch-milliseconds").textContent = "00";
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}


var countdownInterval;

function startCountdown() {
  var hoursInput = document.getElementById("countdown-input-hours");
  var minutesInput = document.getElementById("countdown-input-minutes");
  var secondsInput = document.getElementById("countdown-input-seconds");

  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  countdownInterval = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = Math.floor(totalSeconds % 60);

    document.getElementById("countdown-hours").textContent = padZero(hours);
    document.getElementById("countdown-minutes").textContent = padZero(minutes);
    document.getElementById("countdown-seconds").textContent = padZero(seconds);

    totalSeconds--;
  }, 1000);
}

