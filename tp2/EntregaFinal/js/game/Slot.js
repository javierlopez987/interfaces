class Slot {
    constructor(posX, posY, width, height, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.layer;
        this.ctx= ctx;
        this.width = width;
        this.height = height;
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

    //#region visualizacion
    setLayer(layer) {
        this.layer = layer;
    }

    draw() {
        let region = new Path2D();
        region.rect(this.posX - this.width/2, this.posY - this.height/2, this.width, this.height);
        region.arc(this.posX, this.posY, this.width* 0.75/2, 0, Math.PI * 2);
        region.closePath();
        this.ctx.fillStyle = this.layer;
        this.ctx.fill(region, "evenodd");
        this.ctx.closePath();
    }
    //#endregion

    //#region logica de juego
    addPiecePlayed(piece) {
        this.piecePlayed = piece;
    }

    isEmpty() {
        return this.piecePlayed == null;
    }

    //#endregion
}