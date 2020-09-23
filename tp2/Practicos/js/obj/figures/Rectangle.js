class Rectangle extends Figure {
    constructor(posX, posY, width, height, fill, ctx) {
        super(posX, posY, fill, ctx);
        this.width = width;
        this.height = height;
    }

    draw() {
        super.draw();
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}