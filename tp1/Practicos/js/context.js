document.addEventListener("DOMContentLoaded", function() {

    // Seteo del lienzo
    const HEIGHT = 300;
    const WIDTH = 300;
    let canvas = document.querySelector("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    
    // Obtener contexto del lienzo
    let ctx = canvas.getContext("2d");

    // Pinta región rectangular
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 100, 100);
    
    // Muestra por consola las variables lienzo y contexto
    console.log(canvas);
    console.log(ctx);
})