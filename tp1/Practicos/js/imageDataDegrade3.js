document.addEventListener("DOMContentLoaded", function() {
    const HEIGHT = 300;
    const WIDTH = 300;
    const MAX = 255;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    
    // Obtener contexto del lienzo
    let ctxCanvas = canvas.getContext("2d");

    // Creo imagen sobre lienzo con ImageData
    let imageData = ctxCanvas.createImageData(WIDTH, HEIGHT);

    // Defino variables para color inicial
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 255;

    // Recorre el arreglo de pixeles y setea el color de la imagen
    for (x = 0; x < WIDTH; x++) {
        for (y = 0; y < HEIGHT; y++) {

            //inicial rgb (0, 0, 0)
            //intermedio rgb (255, 255, 0)
            //final rgb (255, 0, 0)
            let coef = MAX / (WIDTH / 2);
            if(x <= WIDTH / 2) {
                r = coef * x;
                g = coef * x;
                setPixel(imageData, x, y, r, g, b, a);
            } else {
                g = coef * (WIDTH - x);
                setPixel(imageData, x, y, r, g, b, a);
            }

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