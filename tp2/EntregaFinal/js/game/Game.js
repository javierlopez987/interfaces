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
    }

    start() {
        this.ctx = this.canvas.getContext("2d");
        this.board = new Board(150, 0, 350, 300, 42, this.ctx);
        this.player1 = new Player("Player1", null);
        this.player2 = new Player("Player2", null);
        this.pieces = new Array(this.board.size);
        for (let index = 0; index < this.pieces.length; index++) {
            let pos;
            if(index < this.pieces.length/2) {
                pos = Util.getPositionRdm(20, 20, 110, 260);
                this.pieces[index] = new Piece(pos.x, pos.y, 20, 'rgba(180, 20, 20, 0.95)', this.ctx);
            } else {
                pos = Util.getPositionRdm(520, 20, 110, 260);
                this.pieces[index] = new Piece(pos.x, pos.y, 20, 'rgba(20, 20, 180, 0.95)', this.ctx);
            }
        }
        this.setEventListeners();
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

    setEventListeners() {
        let backLayer = new Image();
        backLayer.src = "./img/backLayerWood.png";
        // backLayer.src = "./img/landscape.jpg";
        let self = this;
        backLayer.addEventListener('load', function() {
            self.board.setBackLayer(this);
            self.draw();
        });
    }

    changeTurn() {
        return player;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.board.backLayer != null) {
            if(this.pieces != null) {
                if(this.board.frontLayer != null) {
                    this.board.drawBackLayer();
                    this.pieces.forEach(element => {
                        element.draw();
                    });
                    this.board.drawFrontLayer();
                }
            }
        }
    }
}