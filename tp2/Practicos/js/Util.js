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
            a: Math.random()
        }
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }

    static getIntRdm(max) {
        return Math.trunc(Math.random() * max);
    }

    static setOpacity(imageData, opacity) {
        let r, g, b, a;
        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                r = this.getRed(imageData, x, y);
                g = this.getGreen(imageData, x, y);
                b = this.getBlue(imageData, x, y);
                a = opacity;

                this.setPixel(imageData, x, y, r, g, b, a);
            }
            
        }
    }

    // Función para setear pixeles de imagen
    static setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;

        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }

    // Retorna byte R del pixel de coordenadas (x, y)
    static getRed(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
    }

    // Retorna byte G del pixel de coordenadas (x, y)
    static getGreen(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1];
    }

    // Retorna byte B del pixel de coordenadas (x, y)
    static getBlue(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2];
    }

    // Retorna byte A del pixel de coordenadas (x, y)
    static getAlpha(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 3];
    }
}