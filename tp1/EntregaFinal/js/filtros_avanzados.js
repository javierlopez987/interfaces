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
     *  ## FILTRO SATURACION
     * */
    let btn_saturacion = document.querySelector(".saturado");
    btn_saturacion.addEventListener('change', function (e) {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let range = e.target.value;
        filtroSaturacion(imageData, range);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroSaturacion(imageData, rangeValue) {
        const MAX_RANGE = 100;
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;
        let obj_hsl = null;
        let obj_rgb = null;

        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {

                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);
                a = getAlpha(imageData, x, y);
                
                obj_hsl = Conversor.rgbToHsl(r, g, b);

                if(rangeValue < MAX_RANGE / 2) {
                    obj_hsl.s /= (1 + (MAX_RANGE - rangeValue) / MAX_RANGE);
                } else {
                    obj_hsl.s *= (1 + rangeValue / MAX_RANGE);
                }

                obj_rgb = Conversor.hslToRgb(obj_hsl.h, obj_hsl.s, obj_hsl.l);

                r = obj_rgb.r;
                g = obj_rgb.g;
                b = obj_rgb.b;

                setPixel(imageData, x, y, r, g, b, a);
            }
        }
    }

    /**
     *  ## FILTRO BLUR
     * */
    let btn_blur = document.querySelector(".blur");
    btn_blur.addEventListener('click', function () {
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        filtroBlur(imageData);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroBlur() {
        let kernel = getKernelBlur();
    }

    /**
     * Función de creación de kernel blur
     */
    function getKernelBlur() {
        const ANCHO = 3;
        const ALTO = 3;
        let kernel = [];
        
        for (let x = 0; x < ANCHO; x++) {
            kernel[x] = [];
            for (let y = 0; y < ALTO; y++) {
                kernel[x][y] = 1;
            }
        }
        return kernel;
    }

    function aplicarBlur(imageData) {
        let pixel;
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;

        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                pixel = imageData[x][y];

                r = getRed(imageData, x, y);
                g = getGreen(imageData, x, y);
                b = getBlue(imageData, x, y);
                a = getAlpha(imageData, x, y);
            }
        }
    }

    function getMatrizPixel(imageData, pixel) {
        let x = pixel - 16;
    }
})