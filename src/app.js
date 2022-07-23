function displayTime(){
    let time = new Date();
    let hours = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    document.getElementById('NowTime').innerHTML = hours+':'+minutes+':'+seconds;
}

displayTime();
setInterval(displayTime, 1000);