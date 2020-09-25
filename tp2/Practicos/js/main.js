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
    let tablero = new Tablero(0, 0, WIDTH, HEIGHT, 'white', ctx);
    
    let pathImages = [
        "img/powder.jpg",
        "img/alejandro_lerner.jpg",
        "img/shakira.jpg",
        "img/van-gogh-christies.jpg",
        "img/landscape.jpg",
        "img/juan_luis_guerra.jpg",
        "img/ricky_martin.jpg"
    ]

    let indexRdm = Util.getIntRdm(pathImages.length);
        
    let img = new Image();
    img.src = pathImages[indexRdm];
    img.addEventListener('load', createPiece)

    let ctrl = indexRdm;
    while(indexRdm == ctrl) {
        indexRdm = Util.getIntRdm(pathImages.length);
    }

    let img2 = new Image();
    img2.src = pathImages[indexRdm];
    img2.addEventListener('load', createPiece)

    function createPiece() {
        for (let index = 0; index < FIGURE_NUM; index++) {
            let pos = Util.getPositionRdm(WIDTH, HEIGHT);
            let circle = new ImageCircle(pos.x, pos.y, FIGURE_SIZE, this, ctx);
            tablero.addFigure(circle);
        }
        tablero.drawFigures();
    }
    
})
