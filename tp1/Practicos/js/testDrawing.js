document.addEventListener("DOMContentLoaded", function() {
    const HEIGHT = 300;
    const WIDTH = 300;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    
    // Obtener contexto del lienzo
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(100, 120);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(28, 121, 138, 255)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 60, 30,Math.PI * 0, Math.PI * 6/3);
    ctx.ar
    ctx.lineWidth = 5;
    ctx.stroke();


    /**
     // Creo imagen sobre lienzo con ImageData
     let imageData = ctx.createImageData(WIDTH, HEIGHT);
 
     // Dibuja la imagen en pantalla
     ctx.putImageData(imageData, 0, 0);
     * 
     */
})