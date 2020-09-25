class Figure {
    constructor(posX, posY, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
    }

    setFill(fill) {
        this.fill = fill;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        };
    }

    draw() {
        this.ctx.fillStyle = this.fill;
    }

    isPointed(x, y) {};
}