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

    let figureFactory;

 /*    figureFactory = new SolidCircleFactory(FIGURE_SIZE/2, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new SolidRectangleFactory(FIGURE_SIZE, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new GradientCircleFactory(FIGURE_SIZE, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new GradientRectangleFactory(FIGURE_SIZE * 2, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    function createFigures(figureFactory, figureNum) {
        let figure;
        for (let index = 0; index < figureNum; index++) {
            figure = figureFactory.createFigure();
            tablero.addFigure(figure);
        }
    } */
    
    let pathImages = [
        "img/powder.jpg",
        "img/alejandro_lerner.jpg",
        "img/shakira.jpg",
        "img/van-gogh-christies.jpg",
        "img/landscape.jpg",
        "img/juan_luis_guerra.jpg",
        "img/ricky_martin.jpg"
    ]

 /*    for (let index = 0; index < FIGURE_NUM; index++) {
        let img = new Image();
        img.src = pathImages[Util.getIntRdm(pathImages.length)];
        img.addEventListener('load', function() {
            let pos = Util.getPositionRdm(WIDTH, HEIGHT);
            let imageRectangle = new ImageRectangle(pos.x, pos.y, FIGURE_SIZE, FIGURE_SIZE, this, ctx);
            tablero.addFigure(imageRectangle);
            tablero.drawFigures();
        })
    } */

    let img = new Image();
    img.src = pathImages[0];
    img.addEventListener('load', function() {
        let pos = Util.getPositionRdm(WIDTH, HEIGHT);
        let circle = new ImageCircle(pos.x, pos.y, FIGURE_SIZE, this, ctx);
        tablero.addFigure(circle);
        tablero.drawFigures();
    })
    
    //tablero.drawFigures();
})
