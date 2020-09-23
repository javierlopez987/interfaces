"use strict";
const WIDTH = 800;
const HEIGHT = 600;

document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext("2d");
    let tablero = new Tablero(0, 0, 'black', ctx);
    
    let rdmX = Math.trunc(Math.random() * WIDTH);
    let rdmY = Math.trunc(Math.random() * HEIGHT);
    
    let circle = new Circle(rdmX, rdmY, 20, 'red', ctx);

    tablero.addFigure(circle);
    tablero.drawFigures();
    
})