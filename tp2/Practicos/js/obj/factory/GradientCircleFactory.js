class GradientCircleFactory extends FigureFactory {
    constructor(max_size, ctx, container) {
        super(max_size, ctx, container);
    }

    createFigure() {
        super.createFigure();
        this.fill = this.ctx.
            createLinearGradient(
                this.pos.x - this.size/2,
                this.pos.y,
                this.pos.x + this.size/2,
                this.pos.y);
        this.fill.addColorStop(0, Util.getRgbaRdm());
        this.fill.addColorStop(1, Util.getRgbaRdm());
        return new Circle(this.pos.x, this.pos.y, this.size, this.fill, this.ctx);
    }
}