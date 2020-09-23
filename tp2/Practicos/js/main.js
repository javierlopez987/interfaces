"use strict";
const WIDTH = 800;
const HEIGHT = 600;
const SIZE = 50;

document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext("2d");
    let tablero = new Tablero(0, 0, WIDTH, HEIGHT, 'black', ctx);
    
    createFigures(SIZE);
    tablero.draw();
    tablero.drawFigures();
    
    function createFigures(size) {
        for (let index = 0; index < 10; index++) {
            let pos = Util.getPositionRdm(WIDTH, HEIGHT);
            let figure;
                if(index % 2 == 0) 
                    figure = new Circle(pos.x, pos.y, size/2, 'red', ctx);
                else
                    figure = new Rectangle(pos.x, pos.y, size, size, 'blue', ctx);
            tablero.addFigure(figure);
        }
    }
})
