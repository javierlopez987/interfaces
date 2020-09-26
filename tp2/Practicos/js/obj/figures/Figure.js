class Figure {
    constructor(posX, posY, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.spotlighted = false;
        this.spotlightedStyle = 'rgba(20, 20, 20, 0.8)';
        this.initialX = posX;
        this.initialY = posY;
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

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    draw() {
        this.ctx.fillStyle = this.fill;
    }

    isPointed(x, y) {};

    setSpotlighted(value) {
        this.spotlighted = value;
    }

    resetPosition() {
        this.posX = this.initialX;
        this.posY = this.initialY;
    }

    setInitialPosition(x, y) {
        this.initialX = x;
        this.initialY = y;
    }
}