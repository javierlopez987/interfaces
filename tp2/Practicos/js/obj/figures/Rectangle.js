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

    isPointed(x, y) {
        let leftExceeded = x < this.posX;
        let rightExceeded = x > (this.posX + this.width);
        let topExceeded = y < (this.posY);
        let bottomExceeded = y > (this.posY + this.height);

        return !(leftExceeded || rightExceeded || topExceeded || bottomExceeded);
    }
}