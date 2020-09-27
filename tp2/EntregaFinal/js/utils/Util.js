class Util {

    static getPositionRdm(initialX, initialY, width, height) {
        return {
            x: Math.trunc(Math.random() * width) + initialX,
            y: Math.trunc(Math.random() * height) + initialY
        }
    }

    static getRgbaRdm() {
        const MAX_RGBA = 255;
        let rgb = {
            r: Math.trunc(Math.random() * MAX_RGBA),
            g: Math.trunc(Math.random() * MAX_RGBA),
            b: Math.trunc(Math.random() * MAX_RGBA),
            a: Math.random() * 0.3 + 0.2
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

    //#region Filtro Blur
    static filtroBlur(imageData, kernel) {
        let a;
        let pixel;
        
        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                pixel = this.getPixelBlur(imageData, x, y, kernel);
                a = getAlpha(imageData, x, y);
                this.setPixel(imageData, x, y, pixel.r, pixel.g, pixel.b, a);
            }
        }
    }

    static getKernelBlur() {
        let kernel = [];
        
        for (let x = 0; x < ANCHO_KERNEL; x++) {
            kernel[x] = [];
            for (let y = 0; y < ALTO_KERNEL; y++) {
                kernel[x][y] = 1;
            }
        }
        return kernel;
    }

    static getPixelBlur(imageData, x, y, kernel) {
        let ctrl_x = x - 1;
        let ctrl_y = y - 1;
        let ctrl_max_x = ANCHO_KERNEL;
        let ctrl_max_y = ALTO_KERNEL;
        let sum_r = 0;
        let sum_g = 0;
        let sum_b = 0;
        let kernel_value;

        if(ctrl_x >= 0) {
            x = ctrl_x;
        }
        if(ctrl_y >= 0) {
            y = ctrl_y;
        }
        if((x + ANCHO_KERNEL) > imageData.width) {
            ctrl_max_x = imageData.width - x;
        }
        if((y + ALTO_KERNEL) > imageData.height) {
            ctrl_max_y = imageData.height - y;
        }
        
        for(let i = 0; i < ctrl_max_y; i++) {
            for(let j = 0; j < ctrl_max_x; j++) {
                let imageDataCopy = imageData;
                r = getRed(imageDataCopy, (x + i), (y + j));
                g = getGreen(imageDataCopy, (x + i), (y + j));
                b = getBlue(imageDataCopy, (x + i), (y + j));

                kernel_value = kernel[i][j];

                sum_r += r * kernel_value;
                sum_g += g * kernel_value;
                sum_b += b * kernel_value;
            }
        }

        return {
            r: sum_r / (ANCHO_KERNEL * ALTO_KERNEL),
            g: sum_g / (ANCHO_KERNEL * ALTO_KERNEL),
            b: sum_b / (ANCHO_KERNEL * ALTO_KERNEL)};
    }
    //#endregion
}