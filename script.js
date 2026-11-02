let is24Hour = true;

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";
    if (!is24Hour) {

        if (hours >= 12) {
            ampm = " PM";
        } else {
            ampm = " AM";
        }

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }
    }
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds + ampm;
}


function toggleFormat() {

    is24Hour = !is24Hour;

    if (is24Hour) {
        document.querySelector("button").innerText = "12 Hour";
    } else {
        document.querySelector("button").innerText = "24 Hour";
    }

    updateClock();
}
updateClock();
setInterval(updateClock, 1000);