class Util {

    static getPositionRdm(width, height) {
        return {
            x: Math.trunc(Math.random() * width),
            y: Math.trunc(Math.random() * height)
        }
    }

    static getRgbaRdm() {
        const MAX_RGBA = 255;
        let rgb = {
            r: Math.trunc(Math.random() * MAX_RGBA),
            g: Math.trunc(Math.random() * MAX_RGBA),
            b: Math.trunc(Math.random() * MAX_RGBA),
            a: Math.trunc(Math.random() * MAX_RGBA)
        }
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }
}