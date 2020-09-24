class ImageCircleFactory extends FigureFactory {
    constructor(pathImage, max_size, ctx, container) {
        super(max_size, ctx, container);
        this.pathImage = pathImage;
    }

    createFigure() {
        super.createFigure();
        this.fill = new Image();
        this.fill.src = this.pathImage;
        let self = this;
        this.fill.addEventListener('load', function() {
            //self.ctx.drawImage(this, self.posX, self.posY, self.size, self.size);
            let imageData = self.ctx.getImageData(
                self.posX - self.size, 
                self.posY - self.size, 
                self.size * 2, self.size * 2);
            Util.setOpacity(imageData, 20);
        })
        return new ImageCircle(this.pos.x, this.pos.y, this.size, this.fill, this.ctx);
    }
}