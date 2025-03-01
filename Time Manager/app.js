
// Digital Clock
let clock = document.querySelector(".clock");
function updateClock(){
    let now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let period = hours>=12 ? "PM" : "AM"

    //hours = hours %12 || 12;
    if(hours%12 === 0){
        hours=12;
    } else{
        hours = hours%12;
    }

    hours = hours<10 ? "0"+hours : hours;
    min = min<10 ? "0"+min : min;
    sec = sec<10 ? "0"+sec : sec;

    clock.textContent = `${hours}:${min}:${sec} ${period}`;
}

setInterval(updateClock,1000);
updateClock();

// Day Week
let today = document.querySelector(".date");
let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function updateDate(){
    let now = new Date();

    let day = week[now.getDay()];
    let date = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    date = date<10 ? "0"+date : date;
    month = month<10 ? "0"+month :month;

    today.textContent = `${date}.${month}.${year}, ${day}`;

}

updateDate();

//stopwatch

let timer;
let elapsedTime = 0;
let running = false;

let stopWatch = document.querySelector(".stopWatch");

function updateTime(){
    let time = new Date(elapsedTime);
    let minutes = time.getUTCMinutes().toString().padStart(2, '0');
    let seconds = time.getUTCSeconds().toString().padStart(2, '0');
    let milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    stopWatch.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

let start = document.querySelector(".start");
start.addEventListener("click",function(event){
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTime();
        }, 10);
    }
})

let stop = document.querySelector(".stop");
stop.addEventListener("click",function(event){
    running = false;
    clearInterval(timer);
})

let reset = document.querySelector(".reset");
reset.addEventListener("click",function(event){
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateTime();
})

updateTime();
