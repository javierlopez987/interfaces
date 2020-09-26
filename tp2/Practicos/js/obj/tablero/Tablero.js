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

    deleteFigure(figure) {
        let deleted, index;
        if(this.figures.includes(figure)) {
            index = this.figures.indexOf(figure);
            deleted = this.figures.splice(index, 1);
        }
        return deleted;
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