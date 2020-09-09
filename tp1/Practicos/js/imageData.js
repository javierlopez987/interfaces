document.addEventListener("DOMContentLoaded", function() {
    const height = 300;
    const width = 300;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.height = height;
    canvas.width = width;
    
    // Obtener contexto del lienzo
    let ctxCanvas = canvas.getContext("2d");

    // Creo imagen sobre lienzo con ImageData
    let imageData = ctxCanvas.createImageData(width, height);

    // Defino variables para color
    let r = 255;
    let g = 0;
    let b = 0;
    let a = 255;

    // Recorre el arreglo de pixeles y setea el color de la imagen
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b, a);
        }
    }

    // Dibuja la imagen en pantalla
    ctxCanvas.putImageData(imageData, 0, 0);

    // Función para setear pixeles de imagen
    function setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;

        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }

    
})