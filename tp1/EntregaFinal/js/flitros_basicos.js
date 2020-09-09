document.addEventListener('DOMContentLoaded', function() {

     // Se obtiene el lienzo del DOM
    let canvas = document.querySelector("canvas");
    
     // Se obtiene el contexto del lienzo
     let ctx = canvas.getContext("2d");

    // Se agrega un EventListener de click de mouse al boton de filtro de grises
    let btn_grises = document.querySelector(".grises");
    btn_grises.addEventListener('click', function() {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        filtroGrises(imageData);
        ctx.putImageData(imageData, 0, 0);
    })

    // Función que aplica filtro de escala de grises
    function filtroGrises(imageData) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255;
        let gris = 0;

        // Recorre el arreglo de pixeles y setea el color de la imagen
        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);

                gris = (r + g + b) / 3;

                r = gris;
                g = gris;
                b = gris;

                setPixel(imageData, x, y, r, g, b, a);
            }
        }
    }

    function getRed(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
    }

    function getGreen(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1];
    }

    function getBlue(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2];
    }

    function setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;

        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }
})