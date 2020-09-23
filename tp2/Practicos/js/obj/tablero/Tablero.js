class Tablero {
    constructor(posX, posY, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.figures = [];
    }

    addFigure(figure) {
        this.figures.push(figure);
    }

    drawFigures() {
        this.figures.forEach(e => {
            e.draw();
        });
    }

    clear() {

    }
}