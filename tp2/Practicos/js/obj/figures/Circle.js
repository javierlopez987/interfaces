class Circle extends Figure {
    constructor(posX, posY, radius, fill, ctx) {
        super(posX, posY, fill, ctx);
        this.radius = radius;
    }

    draw() {
        super.draw();
        this.ctx.beginPath();
        this.ctx.fillStyle = Util.getRgbaRdm();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
}