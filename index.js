const display = document.getElementById("timer");

let timer = null;
let startTime = 0;
let currentTime = 0;
let elaspseTime = 0;
let isRunning = false;



function start()
{
    if (!isRunning)
    {
        startTime = new Date() - elaspseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop()
{
    if (isRunning)
    {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset()
{
    clearInterval(timer);
    startTime = 0;
    elaspseTime = 0;
    currentTime = 0;
    display.textContent = "00:00:00:00"
    isRunning = false;
}

function add()
{
    elaspseTime += 10000;
    startTime = new Date() - elaspseTime;
    update();
}

function sub()
{
    if(elaspseTime >= 10000)
    {
        elaspseTime -= 10000;
    }
    else{
        elaspseTime = elaspseTime;
    }
    startTime = new Date() - elaspseTime;
    update();
    
}




function update()
{
    currentTime = new Date();
    elaspseTime = currentTime - startTime;
    let hours = Math.floor(elaspseTime / (1000 * 60 * 60)) % 60;
    let minutes = Math.floor(elaspseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspseTime / 1000) % 60 ;
    let mS = Math.floor(elaspseTime / 10) % 100;
    let timeString = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${mS.toString().padStart(2, 0)}`;
    display.textContent = timeString;
}


   

