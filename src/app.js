function displayTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    document.getElementById('NowTime').innerHTML = hours+':'+minutes+':'+seconds;
}

setInterval(displayTime, 1000);