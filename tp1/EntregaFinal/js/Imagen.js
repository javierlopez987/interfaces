class Imagen extends Lienzo{
    constructor(canvas) {
        super(canvas);
        this.imagen = new Image();
    }

    builtImagePredet(path) {
        this.imagen.src = path;
        let aspect_ratio = (1.0 * this.height) / this.width;
        let width = this.width;
        let height = this.height;
        let ctx = this.ctx;
        this.imagen.addEventListener('load', function() {
            let aspect_ratio_img = (1.0 * this.height) / this.width;
            if(aspect_ratio_img <= aspect_ratio && width < this.width) {
                height = width * aspect_ratio_img;
            } else if(aspect_ratio_img > aspect_ratio && height < this.height){
                if(height * aspect_ratio_img <= width) {
                    width = height * aspect_ratio_img;
                } else {
                    height = width / aspect_ratio_img;
                }
            } else {
                width = this.width;
                height = this.height;
            }
            ctx.drawImage(this, 0, 0, width, height);
        });
        
        this.dibujarEnPantalla();
    } 
}