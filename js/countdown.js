const timer =
document.getElementById("timer");

function updateCountdown(){

    const target =
    new Date("February 14, 2027 00:00:00");

    const now =
    new Date();

    const diff =
    target - now;

    if(diff <= 0){

        timer.innerHTML =
        "Happy Valentine's Day ❤️";

        return;
    }

    const days =
    Math.floor(diff / (1000*60*60*24));

    timer.innerHTML =
    `${days} Days Remaining ❤️`;
}

updateCountdown();

setInterval(updateCountdown,1000);