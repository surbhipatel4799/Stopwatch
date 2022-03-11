// get three buttons using id
var startButton = document.getElementById('startWatch');
var stopButton = document.getElementById('stopWatch');
var resetButton = document.getElementById('resetWatch');

//get the display time section to modify time post every second
var timer = document.getElementById('timer-watch');
console.log(timer)

// created 3 variables for time calculation
var hour = 0;
var min = 0;
var sec = 0;
// timeStart variable is used for checking status of timer
// false if timer is off and true when timer is on
// set to false - timer state off by default
var timerStart = false;

// added event listener to start button
startButton.addEventListener('click', function (e) {

    // if timerStart is false representing timer is off
    if (!timerStart) {
        // on clicking on 'start' button - timer will start and timerstart should be true representing timer is on
        timerStart = true;
    }
    // call setTimer function post 1 sec delay
    setTimeout('setTimer()', 1000);

})

function setTimer() {
    // execute only if timer is in 'on' state -> timerStart is true
    if (timerStart) {
        //get hour min and sec in integer format for calculations
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        // increase sec count by 1
        sec += 1;

        // post 60 seconds increase min count by 1 and set sec count to 0
        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        // post 60 minutes increase hour count by 1 and set min count to 0
        if (min == 60) {
            hour += 1;
            min = 0;
        }

        // Append '0' before the hour, min and sec count if they are less than 10-> single digit
        if (hour < 10) {
            hour = '0' + hour;
        }

        if (min < 10) {
            min = '0' + min;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        // update html with updated time
        timer.innerHTML = hour + ":" + min + ":" + sec;

        // call setTimer function post 1 sec delay
        setTimeout('setTimer()', 1000);
    }
}

// added event listener to stop button
stopButton.addEventListener('click', function (e) {
    timerStart = false;
})

// added event listener to reset button
resetButton.addEventListener('click', function(e){
    timer.innerHTML = '00:00:00';
    hour = 0;
    min = 0;
    sec = 0;
})