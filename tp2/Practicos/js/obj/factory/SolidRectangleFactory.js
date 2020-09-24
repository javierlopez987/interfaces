class SolidRectangleFactory extends FigureFactory {
    constructor(max_size, ctx, container) {
        super(max_size, ctx, container);
    }

    createFigure() {
        super.createFigure();
        this.fill = Util.getRgbaRdm();
        return new Rectangle(this.pos.x, this.pos.y, this.size, this.size, this.fill, this.ctx);
    }
}