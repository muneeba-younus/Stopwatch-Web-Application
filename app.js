var hr = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var interval;

var hrCounter = document.getElementById("hr")
var minCounter = document.getElementById("min")
var secCounter = document.getElementById("sec")
var millisecCounter = document.getElementById("millisec")

function stopwatch() {
    millisec++
    millisecCounter.innerHTML = millisec;
    if (millisec >= 100) {
        sec++;
        secCounter.innerHTML = sec
        millisec = 0;
    }
    else if (sec >= 60) {
        min++;
        minCounter.innerHTML = min
        sec = 0;
    }
    else if (min >= 60) {
        hr++;
        hrCounter.innerHTML = hr
        min = 0;
    }
}

function start() {
    clearInterval(interval)
    interval = setInterval(stopwatch, 10)
}
function pause() {
    clearInterval(interval);
}
function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    hrCounter.innerHTML = hr
    minCounter.innerHTML = min
    secCounter.innerHTML = sec
    millisecCounter.innerHTML = millisec
    pause()
}
