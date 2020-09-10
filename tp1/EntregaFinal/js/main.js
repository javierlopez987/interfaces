document.addEventListener('DOMContentLoaded', function() {
    const WIDTH = 800;
    const HEIGHT = 600;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    
    // Obtener contexto del lienzo
    let ctx = canvas.getContext("2d");

    builtImage();

    /**
     * OPCIONES DE MENU
     */
    /**
     *  ## OPCION PIZARRA PREDETERMINADA
     * */
    let btn_pizarra = document.querySelector(".pizarra");
    btn_pizarra.addEventListener("click", builtImage);

    function builtImage() {
        // Creo imagen sobre lienzo con ImageData
        let imageData = ctx.createImageData(WIDTH, HEIGHT);
    
        // Crea un objeto Image (Elemento HTML)
        let imagen = new Image();
        imagen.src = "img/marco_pizarra.png";
        imagen.addEventListener('load', function() {
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        })
    
        // Dibuja la imagen en pantalla
        ctx.putImageData(imageData, 0, 0);
    }   


    /**
     *  ## OPCION DIBUJAR
     * */
    let btn_lapiz = document.querySelector(".lapiz");
    btn_lapiz.addEventListener('click', dibujar);
    
    function dibujar() {
        let x = 0;
        let y = 0;
        let punto_inicio = null;
    
        canvas.addEventListener('mousedown', function(e) {
            console.log(e);
            punto_inicio = new Punto(this, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        })
    
        canvas.addEventListener('mousemove', function(e) {
            if(punto_inicio != null) {
                let origen = punto_inicio;
                let destino = new Punto(this, e.offsetX, e.offsetY);
                if(origen.dibujarLinea(destino)) {
                    punto_inicio = destino;
                }
            }
        })
    
        canvas.addEventListener('mouseup', function(e) {
            if (punto_inicio != null) {
                let origen = punto_inicio;
                let destino = new Punto(this, e.offsetX, e.offsetY);
                if(origen.dibujarLinea(destino)) {
                    punto_inicio = null;
                }
            }
        });
    }
})