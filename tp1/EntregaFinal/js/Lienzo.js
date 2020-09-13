class Lienzo {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = this.getContext();
        this.imageData = this.getImageData();
    }

    getContext() {
        let contexto = this.canvas.getContext("2d");
        contexto.clearRect(0, 0, this.width, this.height);
        return contexto;
    }

    getImageData() {
        return this.ctx.getImageData(0, 0, this.width, this.height);
    }

    dibujarEnPantalla() {
        this.ctx.putImageData(this.imageData, 0, 0);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    setPixel(x, y, r, g, b, a) {
        let index = (x + y * this.imageData.width) * 4;

        this.imageData.data[index + 0] = r;
        this.imageData.data[index + 1] = g;
        this.imageData.data[index + 2] = b;
        this.imageData.data[index + 3] = a;
    }

    // Retorna byte R del pixel de coordenadas (x, y)
    getRed(x, y) {
        let index = (x + y * this.imageData.width) * 4;
        return this.imageData.data[index + 0];
    }

    // Retorna byte G del pixel de coordenadas (x, y)
    getGreen(x, y) {
        let index = (x + y * this.imageData.width) * 4;
        return this.imageData.data[index + 1];
    }

    // Retorna byte B del pixel de coordenadas (x, y)
    getBlue(x, y) {
        let index = (x + y * this.imageData.width) * 4;
        return this.imageData.data[index + 2];
    }

    // Retorna byte A del pixel de coordenadas (x, y)
    getAlpha(x, y) {
        let index = (x + y * this.imageData.width) * 4;
        return this.imageData.data[index + 3];
    }
}