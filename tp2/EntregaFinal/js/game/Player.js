class Player {
    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
        this.color;
        this.playing = false;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    isPlaying() {
        return this.playing;
    }

    setPlaying(value) {
        this.playing = value;
    }

    setColor(color) {
        this.color = color;
    }

    draw(ctx, board) {
        let sizeLetter = 80;
        ctx.fillStyle = this.color;
        ctx.font = `bold ${sizeLetter}px serif`;
        ctx.fillText(this.name, board.posX, board.posY);
        ctx.fillText('wins!', board.posX, (board.posY + sizeLetter));
        
    }
}