var startButton = document.getElementById('startWatch');
var stopButton = document.getElementById('stopWatch');
var resetButton = document.getElementById('resetWatch');

var timer = document.getElementById('timer-watch');
console.log(timer)

var hour = 0;
var min = 0;
var sec = 0;
var timerStart = false;

startButton.addEventListener('click', function (e) {

    if (!timerStart) {
        timerStart = true;
    }
    setTimeout('setTimer()', 1000);

})

function setTimer() {

    if (timerStart) {
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        sec += 1;

        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        if (min == 60) {
            hour += 1;
            min = 0;
        }

        if (hour < 10) {
            hour = '0' + hour;
        }

        if (min < 10) {
            min = '0' + min;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        timer.innerHTML = hour + ":" + min + ":" + sec;

        setTimeout('setTimer()', 1000);
    }
}

stopButton.addEventListener('click', function (e) {
    timerStart = false;
})

resetButton.addEventListener('click', function(e){
    timer.innerHTML = '00:00:00';
    hour = 0;
    min = 0;
    sec = 0;
})