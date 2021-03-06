class Piece {
    constructor(posX, posY, radius, ctx, owner) {
        this.posX = posX;
        this.posY = posY;
        this.initialX = posX;
        this.initialY = posY;
        this.ctx = ctx;
        this.radius = radius;
        this.spotlighted = false;
        this.spotlightedStyle = 'rgba(20, 20, 20, 0.8)';
        this.unfocusedStyle = 'rgba(120, 120, 120, 0.6)'
        this.isPlayed = false;
        this.slotPlayed;
        this.owner = owner;
    }

    //#region logica de juego
    isPointed(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        let hyp = Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2));
        return  hyp < this.radius;
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    resetPosition() {
        this.posX = this.initialX;
        this.posY = this.initialY;
    }

    setSpotlighted(value) {
        this.spotlighted = value;
    }

    setPlayed(slot) {
        this.slotPlayed = slot;
        this.setPosition(slot.posX, slot.posY);
        this.isPlayed = true;
    }

    findWinner() {
        let winner;
        if(this.isPlayed) {
            if(this.slotPlayed.left != null) {
                winner = this.slotPlayed.findWinner(0, "left");
            }
            if(winner == null) {
                if(this.slotPlayed.leftTop != null) {
                    winner = this.slotPlayed.findWinner(0, "leftTop");
                }
            }
            if(winner == null) {
                if(this.slotPlayed.rightTop != null) {
                    winner = this.slotPlayed.findWinner(0, "rightTop");
                }
            }
            if(winner == null) {
                if(this.slotPlayed.right != null) {
                    winner = this.slotPlayed.findWinner(0, "right");
                }
            }
            if(winner == null) {
                if(this.slotPlayed.rightBottom != null) {
                    winner = this.slotPlayed.findWinner(0, "rightBottom");
                }
            }
            if(winner == null) {
                if(this.slotPlayed.bottom != null) {
                    winner = this.slotPlayed.findWinner(0, "bottom");
                }
            }
            if(winner == null) {
                if(this.slotPlayed.leftBottom != null) {
                    winner = this.slotPlayed.findWinner(0, "leftBottom");
                }
            }
        }
        return winner;
    }
    //#endregion

    draw() {
        if(this.owner.isPlaying() || this.isPlayed) {
            this.ctx.fillStyle = this.owner.color;
            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();
            
            //#region spotlight
            if(this.spotlighted === true) {
                this.ctx.beginPath();
                this.ctx.arc(this.posX, this.posY, this.radius * 1.1, 1.5 * Math.PI, Math.PI);
                this.ctx.strokeStyle = this.spotlightedStyle;
                this.ctx.lineWidth = 5;
                this.ctx.stroke();
                this.ctx.closePath();
            }
            //#endregion
    
            //#region avatar
            if(this.owner.avatar != null) {
                this.ctx.save();
                let circlePath = new Path2D();
                circlePath.arc(this.posX, this.posY, this.radius * 0.9, 0, 2 * Math.PI);
                this.ctx.clip(circlePath);
                //#region aspect ratio
                let width = this.radius * 2;
                let height = this.radius * 2;
                let img_width = this.owner.avatar.width;
                let img_height = this.owner.avatar.height;
                let aspect_ratio = (1.0 * height) / width;
                let aspect_ratio_img = (1.0 * img_height) / img_width;
                if(aspect_ratio_img <= aspect_ratio && width < img_width) {
                    height = width * aspect_ratio_img;
                } else if(aspect_ratio_img > aspect_ratio && height < img_height){
                    if(height * aspect_ratio_img <= width) {
                        width = height * aspect_ratio_img;
                    } else {
                        height = width / aspect_ratio_img;
                    }
                } else {
                    width = img_width;
                    height = img_height;
                }
                //#endregion
                this.ctx.drawImage(this.owner.avatar, this.posX - this.radius, this.posY - this.radius, width, height);
                this.ctx.restore();
            }
            //#endregion
        
        } else {
            this.ctx.fillStyle = this.unfocusedStyle;
            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();
        }
        
    }
}