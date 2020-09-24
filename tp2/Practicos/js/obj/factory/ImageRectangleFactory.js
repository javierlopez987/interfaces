class ImageRectangleFactory extends FigureFactory {
    constructor(max_size, ctx, container) {
        super(max_size, ctx, container);
    }

    createFigure() {
        super.createFigure();
        this.fill = new Image();
        this.fill.src = "img/powder.jpg";
        let self = this;
        this.fill.addEventListener('load', function() {
            self.ctx.drawImage(this, self.pos.x, self.pos.y, self.size, self.size);
        })
        return new Rectangle(this.pos.x, this.pos.y, this.size, this.size, this.fill, this.ctx);
    }
}