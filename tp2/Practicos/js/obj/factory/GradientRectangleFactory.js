class GradientRectangleFactory extends FigureFactory {
    constructor(max_size, ctx, container) {
        super(max_size, ctx, container);
    }

    createFigure() {
        super.createFigure();
        this.fill = this.ctx.
        createLinearGradient(
            this.pos.x,
            this.pos.y,
            this.pos.x,
            this.pos.y + this.size);
        this.fill.addColorStop(0, Util.getRgbaRdm());
        this.fill.addColorStop(1, Util.getRgbaRdm());
        return new Rectangle(this.pos.x, this.pos.y, this.size, this.size, this.fill, this.ctx);
    }
}