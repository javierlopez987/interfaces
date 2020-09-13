class Pizarra {
    constructor(canvas, width, height) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    builtImagePredet() {
        // Creo imagen sobre lienzo con ImageData
        let imageData = this.ctx.createImageData(this.width, this.height);
    
        // Crea un objeto Image (Elemento HTML)
        let imagen = new Image();
        imagen.src = "img/marco_pizarra.png";
        this.dibujarImagen(imagen);
        
    
        // Dibuja la imagen en pantalla
        this.ctx.putImageData(imageData, 0, 0);
    } 
    
    dibujarImagen(imagen) {
        let width = this.width;
        let height = this.height;
        let ctx = this.ctx;
        imagen.addEventListener('load', function() {
            ctx.drawImage(this, 0, 0, width, height);
        });
    }
}