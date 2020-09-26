class Piece {
    constructor(posX, posY, radius, fill, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.radius = radius;
        this.spotlighted = false;
        this.spotlightedStyle = 'rgba(20, 20, 20, 0.8)';
        this.initialX = posX;
        this.initialY = posY;
        this.avatar;
    }

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

    draw() {
        this.ctx.fillStyle = this.fill;
        
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        
        // Ring configuration for selected piece
        if(this.spotlighted === true) {
            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius * 1.1, 1.5 * Math.PI, Math.PI);
            this.ctx.fillStyle = Util.getRgbaRdm();
            this.ctx.fill();
            this.ctx.strokeStyle = this.spotlightedStyle;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
            this.ctx.closePath();
        }

        if(this.avatar != null) {
            this.ctx.save();
            let circlePath = new Path2D();
            circlePath.arc(this.posX, this.posY, this.radius * 0.9, 0, 2 * Math.PI);
            this.ctx.clip(circlePath);
            
            let width = this.radius * 2;
            let height = this.radius * 2;
            let img_width = this.fill.width;
            let img_height = this.fill.height;
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
    
            this.ctx.drawImage(this.fill, this.posX - this.radius, this.posY - this.radius, width, height);
            this.ctx.restore();
        }
    }
}