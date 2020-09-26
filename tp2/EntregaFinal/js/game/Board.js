class Board {
    constructor(posX, posY, width, height, size, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.size = size;
        //TO-DO size configurable
        this.sizeX = 7;
        this.sizeY = this.size / this.sizeX;
        this.slots;
        this.backLayer;
        this.frontLayer;
    }

    create() {
        this.slots = [];

        let _x = this.width / this.sizeX;
        let _y = this.height / this.sizeY;

        for (let index = 0; index < this.sizeX; index++) {
            let columnSlots = this.slots[index];
            columnSlots = new Array(this.sizeY);
            for (const row of columnSlots) {
                row = new Slot();
            }
        }
    }

    setBackLayer(layer) {
        this.backLayer = layer;
    }

    setFrontLayer(layer) {
        this.frontLayer = layer;
    }

    drawBackLayer() {
        this.ctx.drawImage(this.layer, this.posX, this.posY, this.width, this.height);
    }

    drawFrontLayer() {
        for (let index = 0; index < this.sizeX; index++) {
            this.ctx.drawImage(this.layer, this.posX, this.posY, this.width, this.height);        
        }
    }

}