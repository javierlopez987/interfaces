class Player {
    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
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
}