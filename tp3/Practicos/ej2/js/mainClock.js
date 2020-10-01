"use strict";
const WIDTH = 600;
const HEIGHT = 600;

document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext("2d");

    let clockConfig = {
        x: WIDTH / 2,
        y: HEIGHT / 2,
        size: 200,
        ctx: ctx
    }

    let clock = new Clock(clockConfig.x, clockConfig.y, clockConfig.size, clockConfig.ctx);

    setInterval(clock.draw.bind(clock), 1000);

})