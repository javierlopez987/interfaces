class Tablero {
    constructor(posX, posY, width, height, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.ctx = ctx;
        this.figures = [];
    }

    draw() {
        this.ctx.fillStyle = this.fill;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    addFigure(figure) {
        this.figures.push(figure);
    }

    drawFigures() {
        this.draw();
        this.figures.forEach(e => {
            e.draw();
        });
    }

    clear() {
        this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
    }
}