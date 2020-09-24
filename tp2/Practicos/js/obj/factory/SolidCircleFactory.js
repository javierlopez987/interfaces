class SolidCircleFactory extends FigureFactory {
    constructor(max_size, ctx, container) {
        super(max_size, ctx, container);
    }

    createFigure() {
        super.createFigure();
        this.fill = Util.getRgbaRdm();
        return new Circle(this.pos.x, this.pos.y, this.size, this.fill, this.ctx);
    }
}