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

    let pathImages = [
        "img/powder.jpg",
        "img/alejandro_lerner.jpg",
        "img/shakira.jpg",
        "img/van-gogh-christies.jpg",
        "img/landscape.jpg",
        "img/juan_luis_guerra.jpg",
        "img/ricky_martin.jpg"
    ]
    let figureFactory;

  /*   figureFactory = new SolidCircleFactory(FIGURE_SIZE/2, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new SolidRectangleFactory(FIGURE_SIZE, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new GradientCircleFactory(FIGURE_SIZE, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM);

    figureFactory = new GradientRectangleFactory(FIGURE_SIZE * 2, ctx, tablero);
    createFigures(figureFactory, FIGURE_NUM); */

    //createImagesRectangles();
    createImagesCircles();

    function createImagesRectangles() {
        let figure;
        for (let index = 0; index < pathImages.length; index++) {
            figureFactory = new ImageRectangleFactory(pathImages[index], FIGURE_SIZE * 2, ctx, tablero);
            figure = figureFactory.createFigure();
            tablero.addFigure(figure);
        }
    }

    function createImagesCircles() {
        let figure;
        for (let index = 0; index < pathImages.length; index++) {
            figureFactory = new ImageCircleFactory(pathImages[index], FIGURE_SIZE * 2, ctx, tablero);
            figure = figureFactory.createFigure();
            tablero.addFigure(figure);
        }
    }

    function createFigures(figureFactory, figureNum) {
        let figure;
        for (let index = 0; index < figureNum; index++) {
            figure = figureFactory.createFigure();
            tablero.addFigure(figure);
        }
    }
    
    tablero.drawFigures();
})
