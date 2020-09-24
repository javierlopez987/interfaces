class ImageCircle extends Circle {
    constructor(posX, posY, radius, fill, ctx) {
        super(posX, posY, radius, fill, ctx);
    }

    draw() {
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    }
}