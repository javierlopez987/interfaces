document.addEventListener("DOMContentLoaded", function() {
    const HEIGHT = 600;
    const WIDTH = 600;
    const MAXRGB = 255;
    const FACTOR = 1 / 3;

    // Creación de lienzo
    let canvas = document.querySelector("canvas");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    
    // Obtener contexto del lienzo
    let ctxCanvas = canvas.getContext("2d");

    // Creo imagen sobre lienzo con ImageData
    let imageData = ctxCanvas.createImageData(WIDTH, HEIGHT);

    // Defino variables para color inicial
    let rgb = [];
    rgb["dark"] = [];
    rgb["dark"]["r"] = 13;
    rgb["dark"]["g"] = 94;
    rgb["dark"]["b"] = 109;

    rgb["base"] = [];
    rgb["base"]["r"] = 52;
    rgb["base"]["g"] = 134;
    rgb["base"]["b"] = 150;

    rgb["light"] = [];
    rgb["light"]["r"] = 134;
    rgb["light"]["g"] = 196;
    rgb["light"]["b"] = 208;

    let r = rgb["base"]["r"];
    let g = rgb["base"]["g"];
    let b = rgb["base"]["g"];
    let a = 255;

    // Recorre el arreglo de pixeles y setea el color de la imagen
    for (x = 0; x < WIDTH; x++) {
        for (y = 0; y < HEIGHT; y++) {

            //inicial rgb (13, 94, 109)
            //intermedio rgb (52, 134, 150)
            //final rgb (134, 196, 208)

            let coef = x / (WIDTH * FACTOR);
            if(x <= WIDTH * FACTOR) {
                r = ((WIDTH / (WIDTH * 1/2)) - coef) * rgb["base"]["r"];
                g = ((WIDTH / (WIDTH * 1/2)) - coef) * rgb["base"]["g"];
                b = ((WIDTH / (WIDTH * 1/2)) - coef) * rgb["base"]["b"];
                setPixel(imageData, x, y, r, g, b, a);
            } else if (x <= 2 * WIDTH * FACTOR) {
                r = coef * rgb["base"]["r"];
                g = coef * rgb["base"]["g"];
                b = coef * rgb["base"]["b"];
                setPixel(imageData, x, y, r, g, b, a);
            } else {
                r = ((WIDTH / (WIDTH * 1/4)) - coef) * rgb["base"]["r"];
                g = ((WIDTH / (WIDTH * 1/4)) - coef) * rgb["base"]["g"];
                b = ((WIDTH / (WIDTH * 1/4)) - coef) * rgb["base"]["b"];
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