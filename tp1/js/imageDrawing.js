document.addEventListener("DOMContentLoaded", function() {
    const HEIGHT = 800;
    const WIDTH = 800;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    
    // Obtener contexto del lienzo
    let ctx = canvas.getContext("2d");

    let imageData;
    // Crea un objeto ImageData (Canvas 2D API)
    // imageData = ctx.createImageData(WIDTH, HEIGHT);
    
    // Crea un objeto Image (Elemento HTML)
    let imagen = new Image();
    imagen.src = "img/powder.jpg";
    imagen.addEventListener('load', function() {
        ctx.drawImage(this, 0, 0);
        imageData = ctx.getImageData(0, 0, this.width, this.height);
        ctx.putImageData(imageData, 0, 0);
    })
 
    // Dibuja la imagen en pantalla
    
})