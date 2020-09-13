class EnBlanco extends Lienzo{
    constructor(canvas) {
        super(canvas);
        this.max_rgba = 255;
    }

    builtImagePredet() {
        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                this.setPixel(this.imageData, x, y, this.max_rgba, this.max_rgba, this.max_rgba, this.max_rgba);
            }
        }
        this.ctx.putImageData(this.imageData, 0, 0);
    }

    // Setea la combinación de RGBA para el pixel de coordenadas (x, y)
    setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;

        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }
}