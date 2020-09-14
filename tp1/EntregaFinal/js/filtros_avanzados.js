document.addEventListener('DOMContentLoaded', function () {
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
     * # SECCION DE FILTROS AVANZADOS
     * */

    /**
     *  ## FILTRO SATURACION
     * */
    const ANCHO_KERNEL = 3;
    const ALTO_KERNEL = 3;
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
        let kernel = getKernelBlur();
        filtroBlur(imageData, kernel);
        ctx.putImageData(imageData, 0, 0);
    })

    function filtroBlur(imageData, kernel) {
        let a;
        let pixel;
        
        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                pixel = getPixelBlur(imageData, x, y, kernel);
                a = getAlpha(imageData, x, y);
                setPixel(imageData, x, y, pixel.r, pixel.g, pixel.b, a);
            }
        }
    }

    /**
     * Función de creación de kernel blur
     */
    function getKernelBlur() {
        let kernel = [];
        
        for (let x = 0; x < ANCHO_KERNEL; x++) {
            kernel[x] = [];
            for (let y = 0; y < ALTO_KERNEL; y++) {
                kernel[x][y] = 1;
            }
        }
        return kernel;
    }

    function getPixelBlur(imageData, x, y, kernel) {
        let ctrl_x = x - 1;
        let ctrl_y = y - 1;
        let ctrl_max_x = ANCHO_KERNEL;
        let ctrl_max_y = ALTO_KERNEL;
        let sum_r = 0;
        let sum_g = 0;
        let sum_b = 0;
        let kernel_value;

        if(ctrl_x >= 0) {
            x = ctrl_x;
        }
        if(ctrl_y >= 0) {
            y = ctrl_y;
        }
        if((x + ANCHO_KERNEL) > imageData.width) {
            ctrl_max_x = imageData.width - x;
        }
        if((y + ALTO_KERNEL) > imageData.height) {
            ctrl_max_y = imageData.height - y;
        }
        
        for(let i = 0; i < ctrl_max_y; i++) {
            for(let j = 0; j < ctrl_max_x; j++) {
                let imageDataCopy = imageData;
                r = getRed(imageDataCopy, (x + i), (y + j));
                g = getGreen(imageDataCopy, (x + i), (y + j));
                b = getBlue(imageDataCopy, (x + i), (y + j));

                kernel_value = kernel[i][j];

                sum_r += r * kernel_value;
                sum_g += g * kernel_value;
                sum_b += b * kernel_value;
            }
        }

        return {
            r: sum_r / (ANCHO_KERNEL * ALTO_KERNEL),
            g: sum_g / (ANCHO_KERNEL * ALTO_KERNEL),
            b: sum_b / (ANCHO_KERNEL * ALTO_KERNEL)};
    }
})