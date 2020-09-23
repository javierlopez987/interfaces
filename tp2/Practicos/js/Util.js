class Util {

    static getPositionRdm(width, height) {
        return {
            x: Math.trunc(Math.random() * width),
            y: Math.trunc(Math.random() * height)
        }
    }
}