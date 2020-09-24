"use strict";
const WIDTH = 800;
const HEIGHT = 600;
const FIGURE_SIZE = 50;
const FIGURE_NUM = 10

document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext("2d");
    let tablero = new Tablero(0, 0, WIDTH, HEIGHT, 'black', ctx);
    
    createFigures(FIGURE_SIZE, FIGURE_NUM);
    tablero.draw();
    tablero.drawFigures();
    
    function createFigures(size, num) {
        let pos, figure, color;
        for (let index = 0; index < num; index++) {
            pos = Util.getPositionRdm(WIDTH, HEIGHT);
            color = Util.getRgbaRdm();
                if(index % 2 == 0) {
                    figure = new Circle(pos.x, pos.y, size/2, color, ctx);
                } else {
                    figure = new Rectangle(pos.x, pos.y, size, size, color, ctx);
                }
            tablero.addFigure(figure);
        }
    }
})
