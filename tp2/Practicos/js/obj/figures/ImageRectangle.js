class ImageRectangle extends Figure {
    constructor(posX, posY, width, height, fill, ctx) {
        super(posX, posY, fill, ctx);
        this.width = width;
        this.height = height;
    }

    draw() {
        let pat = this.ctx.createPattern(this.fill, "no-repeat");
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = pat;
        this.ctx.fill();
    }
}