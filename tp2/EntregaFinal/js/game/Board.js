class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.size = this.width * this.height;
        this.columns;
        this.layer;
    }

    create() {
        this.columns = []

        for (let index = 0; index < this.size; index++) {
            this.columns[index] = new Column(this.height);
        }
    }

    drawBackLayer() {

    }

    drawFrontLayer() {

    }

}