class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx;
        this.board;
        this.pieces;
        this.player1;
        this.player2;
        this.turn;
        this.gameRound;
        this.lastMove;
        this.ground;
        this.frontLayerLoaded = false;
        this.backLayerLoaded = false;
        this.groundLoaded = false;
        this.lastSelectedFigure = null;
        this.isDragging = false;
    }

    start() {
        this.ctx = this.canvas.getContext("2d");

        //Configuracion y creacion de tablero
        let boardWidth = 350;
        let boardHeight = 300;
        let boardPositionX = this.canvas.width/2 - boardWidth/2;
        let boardPositionY = this.canvas.height/2 - boardHeight/2;
        let amountOfPieces = 42;
        this.board = new Board(boardPositionX, boardPositionY, boardWidth, boardHeight, amountOfPieces, this.ctx);
        this.board.create();

        //Configuracion y creacion de jugadores
        this.player1 = new Player("Player1", null);
        this.player2 = new Player("Player2", null);

        //Configuracion y creacion de piezas
        let pieceRadius = 20;
        let pieceSize = 20 * 2;
        let player1Box = 
            {
                leftBorder: pieceRadius,
                topBorder: pieceRadius,
                widthBox: (this.canvas.width - this.board.width) / 2 - pieceSize,
                heightBox: this.canvas.height - pieceSize
            };
        let player2Box = 
            {
                leftBorder: this.board.width + (this.canvas.width - this.board.width) / 2 + pieceRadius,
                topBorder: pieceRadius,
                widthBox: (this.canvas.width - this.board.width) / 2 - pieceSize,
                heightBox: this.canvas.height - pieceSize
            };

        this.pieces = new Array(this.board.size);
        for (let index = 0; index < this.pieces.length; index++) {
            let pos;
            if(index < this.pieces.length/2) {
                pos = Util.getPositionRdm(
                    player1Box.leftBorder, 
                    player1Box.topBorder, 
                    player1Box.widthBox, 
                    player1Box.heightBox);
                this.pieces[index] = new Piece(pos.x, pos.y, 20, 'rgba(180, 20, 20, 0.95)', this.ctx);
            } else {
                pos = Util.getPositionRdm(
                    player2Box.leftBorder, 
                    player2Box.topBorder, 
                    player2Box.widthBox, 
                    player2Box.heightBox);
                this.pieces[index] = new Piece(pos.x, pos.y, 20, 'rgba(20, 20, 180, 0.95)', this.ctx);
            }
        }

        //Seteo de EventListeners de renderizado
        this.setEventListenersRender();

        //Seteo de EventListeners de lógica de juego
        this.setEventListenersLogic();
    }

    addPlayer(player) {
        if(this.player1 == null) {
            this.player1 = player;
        } else if (this.player2 == null) {
            this.player2 = player;
        }
    }

    setPlayers(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    checkWinner() {
        return false;
    }

    finish() {

    }
    
    changeTurn() {
        return this.player;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if(this.groundLoaded) {
            this.ctx.drawImage(this.ground, 0, 0, this.canvas.width, this.canvas.height);
        }

        if(this.backLayerLoaded && this.frontLayerLoaded) {
            if(this.pieces != null) {
                this.board.drawBackLayer();
                this.pieces.forEach(element => {
                    element.draw();
                });
                this.board.drawFrontLayer();
            }
        }
    }

    //#region eventListeners rendering
    setEventListenersRender() {
        let backLayer = new Image();
        backLayer.src = "./img/frontLayerWood.jpg";
        let self = this;
        backLayer.addEventListener('load', function() {
            if(self.board.setBackLayer(this)) {
                self.backLayerLoaded = true;
                self.draw();
            };
        });

        let frontLayer = new Image();
        frontLayer.src = "./img/floor.png";
        frontLayer.addEventListener('load', function() {
            if(self.board.setFrontLayer(this)) {
                self.frontLayerLoaded = true;
                self.draw();
            };
        });

        this.ground = new Image();
        this.ground.src = "./img/rockTexture.jpg";
        this.ground.addEventListener('load', function() {
            self.groundLoaded = true;
            self.draw();
        });
    }
    //#endregion

    //#region logica de drag&drop
    setEventListenersLogic() {
        let self = this;
        this.canvas.addEventListener("mousedown", (e) => self.setDragger(e, self));
        this.canvas.addEventListener("mousemove", (e) => self.startDragging(e, self));
        this.canvas.addEventListener("mouseup", (e) => self.unsetDragger(e, self));
        this.canvas.addEventListener("mouseout", (e) => self.unsetDragger(e, self));
    }

    setDragger(e) {
        let selected = this.findSelected(e.layerX, e.layerY);

        if(selected != null) {
            // Permite destacar la figura seleccionada
            selected.setSpotlighted(true);
            // Variable de control
            this.lastSelectedFigure = selected;
        } 

        this.draw();
    }

    startDragging(e) {
        if(this.lastSelectedFigure != null) {
            this.isDragging = true;
            this.lastSelectedFigure.setPosition(e.layerX, e.layerY);
            this.draw();
        }
    }

    unsetDragger(e) {
        if(this.isDragging == true) {
            let self = this;
            this.checkMove(e, self);
            this.isDragging = false;
        }
        this.unselect();
        this.draw();
    }

    unselect() {
        if(this.lastSelectedFigure != null) {
            this.lastSelectedFigure.setSpotlighted(false);
            this.lastSelectedFigure = null;
        }
    }

    findSelected(x, y) {
        for (let index = 0; index < this.pieces.length; index++) {
            const f = this.pieces[index];
            if(f.isPointed(x, y)) {
                return f;
            }
        }
    }
    //#endregion

    checkMove(e, self) {
        if(e.type == "mouseup") {
            let board = self.board.getBoardBox();
            if(e.layerX < board.leftBorder || e.layerX > board.rightBorder) {
                self.lastSelectedFigure.resetPosition();
                self.draw();
            } else {
                board = self.board.getBoardBreakpoints();
                for (let i = 0; i < board.breakpoints.length; i++) {
                    const breakpoint = board.breakpoints[i];
                    console.log(breakpoint);
                    console.log(e.layerX);
                    if(e.layerX < breakpoint) {
                        console.log("exito" + breakpoint);
                        return true;
                    }
                    
                }
            }
        }
    }

}