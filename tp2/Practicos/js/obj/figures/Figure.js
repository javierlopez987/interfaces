class Figure {
    constructor(posX, posY, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.spotlighted = false;
        this.spotlightedStyle = 'rgba(20, 20, 20, 0.8)';
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

    setSpotlighted(value) {
        this.spotlighted = value;
    }
}