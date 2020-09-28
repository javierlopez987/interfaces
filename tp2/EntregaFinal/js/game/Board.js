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

        let relativeWidth = this.width / this.sizeX;
        let relativeHeight = this.height / this.sizeY;
        let relativeX = this.posX + relativeWidth / 2;
        let relativeY = this.posY + relativeHeight / 2;

        for (let i = 0; i < this.sizeX; i++) {
            this.slots[i] = [];

            for (let j = 0; j < this.sizeY; j++) {
                this.slots[i][j] = new Slot(relativeX, relativeY, relativeWidth, relativeHeight, this.ctx);
                relativeY = relativeY + relativeHeight;
            }
            relativeY = this.posY + relativeHeight / 2;
            relativeX = relativeX + relativeWidth;
        }

        this.setLinkToSlots();
    }

    setLinkToSlots() {
        let ctrl;
        let neighbors;
        let left, leftTop, top, rightTop, right, rightBottom, bottom, leftBottom;

        for (let i = 0; i < this.slots.length; i++) {
            const columnSlots = this.slots[i];
            for (let j = 0; j < columnSlots.length; j++) {
                const slot = columnSlots[j];

                neighbors = Util.getNeighbors(i, j);
                
                ctrl = neighbors.left;
                left = this.getSlot(ctrl.i, ctrl.j);
                if(left != null) {
                    slot.left = left;
                }

                ctrl = neighbors.leftTop;
                leftTop = this.getSlot(ctrl.i, ctrl.j);
                if(leftTop != null) {
                    slot.leftTop = leftTop;
                }

                ctrl = neighbors.top;
                top = this.getSlot(ctrl.i, ctrl.j);
                if(top != null) {
                    slot.top = top;
                }

                ctrl = neighbors.rightTop;
                rightTop = this.getSlot(ctrl.i, ctrl.j);
                if(rightTop != null) {
                    slot.rightTop = rightTop;
                }

                ctrl = neighbors.right;
                right = this.getSlot(ctrl.i, ctrl.j);
                if(right != null) {
                    slot.right = right;
                }

                ctrl = neighbors.rightBottom;
                rightBottom = this.getSlot(ctrl.i, ctrl.j);
                if(rightBottom != null) {
                    slot.rightBottom = rightBottom;
                }

                ctrl = neighbors.bottom;
                bottom = this.getSlot(ctrl.i, ctrl.j);
                if(bottom != null) {
                    slot.bottom = bottom;
                }

                ctrl = neighbors.leftBottom;
                leftBottom = this.getSlot(ctrl.i, ctrl.j);
                if(leftBottom != null) {
                    slot.leftBottom = leftBottom;
                }

            }
        }
        
    }

    getSlot(i, j) {
        if(i >= 0 && i < this.slots.length) {
            if(j >= 0 && j < this.slots[i].length)
                return this.slots[i][j];
        }
    }

    //#region visualizacion
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

    //#region logica de juego
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