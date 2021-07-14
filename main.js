let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function draw() {
    document.getElementById("days").innerHTML = days.toString().padStart(2,0);
    document.getElementById("hours").innerHTML = hours.toString().padStart(2,0);
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2,0);
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2,0);
}
draw()

function getUserInput() {
    let secondsInput = document.getElementById("user-seconds").value
    seconds = secondsInput;
    let minutesInput = document.getElementById("user-minutes"). value
    minutes = minutesInput
    let hoursInput = document.getElementById("user-hours").value
    hours = hoursInput
    let daysInput = document.getElementById("user-days").value
    days = daysInput
    draw()
}

function countdown() {
    console.log("countdown started")
    let contador = setInterval(()=> {
        seconds-=1
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2,0);
        if (seconds<0) {
            minutes-=1;
            seconds = 59;
            draw()
        }
        if (minutes < 0) {
            hours -=1;
            minutes = 59;
            draw()
        }
        if (hours < 0) {
            days-=1;
            hours = 23;
            draw()
        }
        if (days<0) {
            clearInterval(contador)
            seconds = 0;
            minutes = 0;
            hours = 0;
            days =0;
            draw()
            document.getElementById("final-message").innerHTML = "FIN"
        }
    },1000)
}
let startButton = document.getElementById("start")
startButton.addEventListener('click', countdown)