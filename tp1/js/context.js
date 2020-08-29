document.addEventListener("DOMContentLoaded", function() {

    // Creación de lienzo
    const height = 300;
    const width = 300;
    let canvas = document.querySelector("canvas");
    canvas.height = height;
    canvas.width = width;
    
    // Obtener contexto
    let ctxCanvas = canvas.getContext("2d");

    // Creación de rectangulo
    ctxCanvas.fillStyle = "#FF0000";
    ctxCanvas.fillRect(20, 20, 100, 100);
    
    console.log(canvas);
    console.log(ctxCanvas);

})