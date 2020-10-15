"use strict";
let hourHand, minuteHand, secondHand;

document.addEventListener("DOMContentLoaded", function() {

    hourHand = document.querySelector(".hour");
    minuteHand = document.querySelector(".minute");
    secondHand = document.querySelector(".second");

    tick();
    setInterval(tick, 1000);

})

function tick() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hourHand.style.transform = 'rotate(${360 * (hours % 12) / 12}deg)';
    minuteHand.style.transform = 'rotate(${360 * minutes / 60}deg)';
    secondHand.style.transform = 'rotate(${360 * seconds / 60}deg)';
}