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

    findWinner(count, direction) {
        let winner = null;
        const WINNNIG = 4;
        count++;
        if(count < WINNNIG) {
            if(direction == "left") {
                if(this.left != null) {
                    if(this.left.piecePlayed != null) {
                        if(this.left.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.left.findWinner(count, "left");
                        }
                    }
                }
            } else if (direction == "leftTop") {
                if(this.leftTop != null) {
                    if(this.leftTop.piecePlayed != null) {
                        if(this.leftTop.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.leftTop.findWinner(count, "leftTop");
                        }
                    }
                }
            } else if (direction == "rightTop") {
                if(this.rightTop != null) {
                    if(this.rightTop.piecePlayed != null) {
                        if(this.rightTop.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.rightTop.findWinner(count, "rightTop");
                        }
                    }
                }
            } else if (direction == "right") {
                if(this.right != null) {
                    if(this.right.piecePlayed != null) {
                        if(this.right.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.right.findWinner(count, "right");
                        }
                    }
                }
            } else if (direction == "rightBottom") {
                if(this.rightBottom != null) {
                    if(this.rightBottom.piecePlayed != null) {
                        if(this.rightBottom.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.rightBottom.findWinner(count, "rightBottom");
                        }
                    }
                }
            } else if (direction == "bottom") {
                if(this.bottom != null) {
                    if(this.bottom.piecePlayed != null) {
                        if(this.bottom.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.bottom.findWinner(count, "bottom");
                        }
                    }
                }
            } else if (direction == "leftBottom") {
                if(this.leftBottom != null) {
                    if(this.leftBottom.piecePlayed != null) {
                        if(this.leftBottom.piecePlayed.owner == this.piecePlayed.owner) {
                            winner = this.leftBottom.findWinner(count, "leftBottom");
                        }
                    }
                }
            }
        }

        if(count === WINNNIG) {
            winner = this.piecePlayed.owner;
        }
        if(winner != null) {
            this.piecePlayed.setSpotlighted(true);
        }

        return winner;
    }

    //#endregion
}