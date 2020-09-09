document.addEventListener('DOMContentLoaded', function () {
    const MAX_BIT = 255;

    // Se obtiene el lienzo del DOM
    let canvas = document.querySelector("canvas");

    // Se obtiene el contexto del lienzo
    let ctx = canvas.getContext("2d");

    // Retorna byte R del pixel de coordenadas (x, y)
    function getRed(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
    }

    // Retorna byte G del pixel de coordenadas (x, y)
    function getGreen(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1];
    }

    // Retorna byte B del pixel de coordenadas (x, y)
    function getBlue(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2];
    }

    // Retorna byte A del pixel de coordenadas (x, y)
    function getAlpha(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 3];
    }

    // Setea la combinación de RGBA para el pixel de coordenadas (x, y)
    function setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;

        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }

    /**
     * # SECCION DE FILTROS  
     * */

    /**
     *  ## FILTRO GRISES
     * */

    // Se agrega un EventListener de click de mouse al boton de filtro de grises
    let btn_grises = document.querySelector(".grises");
    btn_grises.addEventListener('click', function() {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        filtroGrises(imageData);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroGrises(imageData) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;
        let gris = 0;

        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);
                a = getAlpha(imageData, x, y);

                gris = (r + g + b) / 3;

                r = gris;
                g = gris;
                b = gris;

                setPixel(imageData, x, y, r, g, b, a);
            }
        }
    }

    /**
     *  ## FILTRO BINARIO
     * */
    // Se agrega un EventListener de click de mouse al boton de filtro de binario
    let btn_binario = document.querySelector(".binario");
    btn_binario.addEventListener('click', function () {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        filtroBinario(imageData);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroBinario(imageData) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;
        let gris = 0;

        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);
                a = getAlpha(imageData, x, y);

                gris = (r + g + b) / 3;

                if (gris < (MAX_BIT / 2)) {
                    r = 0;
                    g = 0;
                    b = 0;
                } else {
                    r = MAX_BIT;
                    g = MAX_BIT;
                    b = MAX_BIT;
                }

                setPixel(imageData, x, y, r, g, b, a);
            }
        }
    }

        /**
     *  ## FILTRO NEGATIVO
     * */
    // Se agrega un EventListener de click de mouse al boton de filtro de negativo
    let btn_negativo = document.querySelector(".negativo");
    btn_negativo.addEventListener('click', function () {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        filtroNegativo(imageData);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroNegativo(imageData) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;

        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);
                a = getAlpha(imageData, x, y);

                r = MAX_BIT - r;
                g = MAX_BIT - g;
                b = MAX_BIT - b;

                setPixel(imageData, x, y, r, g, b, a);
            }
        }
    }
})