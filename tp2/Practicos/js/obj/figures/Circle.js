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

    isPointed(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        let hyp = Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2));
        return  hyp < this.radius;
    }
}