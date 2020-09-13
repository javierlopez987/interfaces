class Pizarra extends Lienzo{
    constructor(canvas) {
        super(canvas);
        this.imagen = new Image();
    }

    builtImagePredet() {
        this.imagen.src = "img/marco_pizarra.png";
        
        let width = this.width;
        let height = this.height;
        let ctx = this.ctx;
        this.imagen.addEventListener('load', function() {
            ctx.drawImage(this, 0, 0, width, height);
        });
        
        this.dibujarEnPantalla();
    } 

}