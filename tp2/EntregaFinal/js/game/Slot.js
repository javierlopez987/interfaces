class Slot {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.fill;
        this.layer;
        this.piecePlayed;
        this.left;
        this.leftTop;
        this.top;
        this.rightTop;
        this.right;
        this.rightBottom;
        this.bottom;
        this.leftBottom;
    }

    create() {

    }

    addPiecePlayed(piece) {

    }

    isEmpty() {
        return this.piecePlayed == null;
    }
}