class Game {
    constructor() {
        this.board;
        this.pieces;
        this.player1;
        this.player2;
        this.turn;
        this.gameRound;
        this.lastMove;
    }

    start() {

    }

    setBoard(board) {
        this.board = board;
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

    }

    changeTurn() {
        return player;
    }

    draw() {
        this.board.drawBackLayer();
        this.pieces.forEach(element => {
            element.draw();
        });
        this.board.drawFrontLayer();
    }
}