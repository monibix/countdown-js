let days = 01;
let hours = 01;
let minutes = 01;
let seconds = 03;
console.log("days", days)

function draw() {
document.getElementById("days").innerHTML = days.toString().padStart(2,0);
document.getElementById("hours").innerHTML = hours.toString().padStart(2,0);
document.getElementById("minutes").innerHTML = minutes.toString().padStart(2,0);
document.getElementById("seconds").innerHTML = seconds.toString().padStart(2,0);
}
draw()

let startButton = document.getElementById("start")

function countdown() {
    console.log("contador activado")
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
            document.getElementById("final-message").innerHTML = "¡Cuenta Activada!"
        }
    },1)
}

startButton.addEventListener('click', countdown())
//window.onload = countdown()
