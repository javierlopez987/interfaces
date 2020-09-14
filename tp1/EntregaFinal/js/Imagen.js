class Imagen extends Lienzo{
    constructor(canvas) {
        super(canvas);
        this.imagen = new Image();
    }

    builtImagePredet(path) {
        this.imagen.src = path;
        
        let width = this.width;
        let height = this.height;
        let ctx = this.ctx;
        this.imagen.addEventListener('load', function() {
            ctx.drawImage(this, 0, 0, width, height);
        });
        
        this.dibujarEnPantalla();
    } 
}