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
     *  # HERRAMIENTAS
     * */
    
    /**
     *  ## HERRAMIENTA LAPIZ
     * */
    let isSetLapiz = false;
    let punto_inicio = null;
    
    let btn_lapiz = document.querySelector(".lapiz");
    btn_lapiz.addEventListener('click', setLapiz);
    
    function setLapiz() {
        if(isSetGoma) {
            unsetGoma();
        }
        canvas.addEventListener('mousedown', trazarLinea);
        canvas.addEventListener('mousemove', trazarLinea);
        canvas.addEventListener('mouseup', trazarLinea);
        isSetLapiz = true;
    }
    
    function unsetLapiz() {
        canvas.removeEventListener('mousedown', trazarLinea);
        canvas.removeEventListener('mousemove', trazarLinea);
        canvas.removeEventListener('mouseup', trazarLinea);
        isSetLapiz = false;
    }
    
    /**
     *  ## HERRAMIENTA GOMA
     * */
    let isSetGoma = false;
    
    let btn_goma = document.querySelector(".goma");
    btn_goma.addEventListener('click', setGoma);
    
    function setGoma() {
        if(isSetLapiz) {
            unsetLapiz();
        }
        canvas.addEventListener('mousedown', borrarLinea);
        canvas.addEventListener('mousemove', borrarLinea);
        canvas.addEventListener('mouseup', borrarLinea);
        isSetGoma = true;
    }
    
    function unsetGoma() {
        canvas.removeEventListener('mousedown', borrarLinea);
        canvas.removeEventListener('mousemove', borrarLinea);
        canvas.removeEventListener('mouseup', borrarLinea);
        isSetGoma = false;
    }

    /**
     *  ## FUNCIONES DE DIBUJO
     */  
    function trazarLinea(e) {
        if(punto_inicio != null) {
            let origen = punto_inicio;
            let destino = new Punto(this, e.layerX, e.layerY);
            if(origen.dibujar(destino)) {
                if(e.type == 'mouseup') {
                    punto_inicio = null;
                } else {
                    punto_inicio = destino;
                }
            }
        } else if (e.type == 'mousedown'){
            punto_inicio = new Punto(canvas, e.layerX, e.layerY);
        }
    }

    function borrarLinea(e) {
        if(punto_inicio != null) {
            let origen = punto_inicio;
            let destino = new Punto(this, e.layerX, e.layerY);
            origen.borrar();
            if(e.type == 'mouseup') {
                punto_inicio = null;
            } else {
                punto_inicio = destino;
            }
        } else if (e.type == 'mousedown'){
            punto_inicio = new Punto(canvas, e.layerX, e.layerY);
        }
    }
})