class Slot {
    constructor(posX, posY, width, height, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = 'rgba(202, 164, 114, 0.5)';
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

    addPiecePlayed(piece) {
        this.piecePlayed = piece;
    }

    setLayer(layer) {
        this.layer = layer;
    }

    isEmpty() {
        return this.piecePlayed == null;
    }

    draw() {
        this.ctx.save();
        let region = new Path2D();
        region.rect(this.posX - this.width/2, this.posY - this.height/2, this.width, this.height);
        region.arc(this.posX, this.posY, this.width* 0.75/2, 0, Math.PI * 2);
        region.closePath();
        this.ctx.fillStyle = this.fill;
        this.ctx.fill(region, "evenodd");
        // this.ctx.drawImage(this.layer, this.posX - this.width/2, this.posY - this.height/2, this.width, this.height);
        // let circlePath = new Path2D();
        // circlePath.arc(this.posX, this.posY, this.width/2, 0, Math.PI * 2);
        // this.ctx.clip(circlePath);
        // this.ctx.beginPath();
        // this.ctx.arc(this.posX, this.posY, this.width/2, 0, Math.PI * 2);
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        // this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }
}