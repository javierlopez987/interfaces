class ImageRectangleFactory extends FigureFactory {
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
            self.ctx.drawImage(this, self.pos.x, self.pos.y, self.size, self.size);
        })
        return new Rectangle(this.pos.x, this.pos.y, this.size, this.size, this.fill, this.ctx);
    }
}