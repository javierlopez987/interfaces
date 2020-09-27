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
        let relativeX = this.posX + _x/2;
        let relativeY = this.posY + _y/2;

        for (let x = 0; x < this.sizeX; x++) {
            this.slots[x] = [];
            for (let y = 0; y < this.sizeY; y++) {
                this.slots[x][y] = new Slot(relativeX, relativeY, _x, _y, this.ctx);
                relativeY = relativeY + _y;
            }
            relativeY = this.posY + _y/2;
            relativeX = relativeX + _x;
        }
    }

    //#region metodos de visualizacion
    setBackLayer(layer) {
        this.backLayer = layer;
        return this.backLayer != null;
    }

    setFrontLayer(layer) {
        this.frontLayer = layer;
        return this.frontLayer != null;
    }

    drawBackLayer() {
        this.ctx.drawImage(this.backLayer, this.posX, this.posY, this.width, this.height);
    }

    drawFrontLayer() {
        this.slots.forEach(column => {
            column.forEach(slot => {
                slot.setLayer(this.frontLayer);
                slot.draw();
            });        
        });
    }
    //#endregion

    //#region metodos de logica de juego
    getBoardBox() {
        return {
            leftBorder: this.posX,
            topBorder: this.posY,
            rightBorder: this.posX + this.width,
            bottomBorder: this.posY + this.height
        }
    }

    getBoardBreakpoints() {
        let board = {
            breakpoints: []
        };
        for (let i = 0; i <= this.sizeX; i++) {
            board.breakpoints.push(this.posX + i * this.width / this.sizeX);
        }

        return board;
    }

    addPiecePlayed(piece, columnNumber) {
        let index = columnNumber -1;
        let columnSlots = this.slots[index];
        let prevIndex;

        let i = 0;
        let slot;
        while(i < columnSlots.length) {
            slot = columnSlots[i];
            if(slot == null) {
                i = columnSlots.length;
            } else if (!slot.isEmpty()) {
                prevIndex = i - 1;
                slot = columnSlots[prevIndex];
                i = columnSlots.length;
            }
            i++;
        }

        if(slot != null) {
            if(slot.isEmpty()) {
                piece.setPlayed(slot);
                slot.addPiecePlayed(piece);
                return piece;
            } 
        } else {
            piece.resetPosition();
        }
    }
    //#endregion
}