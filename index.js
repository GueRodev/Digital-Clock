const hour_Element = document.getElementById('hour');
const minutes_Element = document.getElementById('minutes');
const seconds_Element = document.getElementById('seconds');
const am_Element = document.getElementById('am');

function updateClock() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am = 'AM';

    if (hour === 12) {
        am = 'PM';
    }
    else if (hour > 12) {
        hour = hour - 12;
        am = 'PM';
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hour_Element.innerText = hour;
    minutes_Element.innerText = minutes;
    seconds_Element.innerText = seconds;
    am_Element.innerText = am;

    setTimeout(() => {
    updateClock()  
    }, 1000)
    

}

updateClock();