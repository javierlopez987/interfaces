class FigureFactory {
    constructor(max_size, ctx, container) {
        this.ctx = ctx;
        this.container = container;
        this.max_size = max_size;
        this.pos;
        this.fill;
        this.size;
    }

    createFigure() {
        this.pos = Util.getPositionRdm(this.container.width, this.container.height);
        this.size = Util.getIntRdm(this.max_size);
    }
}