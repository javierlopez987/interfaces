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
})