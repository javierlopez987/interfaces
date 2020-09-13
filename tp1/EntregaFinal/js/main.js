'use strict';
document.addEventListener('DOMContentLoaded', cargarCanvas);
document.addEventListener('DOMContentLoaded', cargarMenu);
const WIDTH = 800;
const HEIGHT = 600;
let canvas;
let lienzo;
let filtro;


function cargarCanvas() {
    // Creación de lienzo
    canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    builtPizarra();
}

function builtPizarra() {
    lienzo = new Pizarra(canvas);
    lienzo.builtImagePredet();
}

function builtCuadro() {
    lienzo = new Cuadro(canvas);
    lienzo.builtImagePredet();
}

function builtEnBlanco() {
    lienzo = new EnBlanco(canvas);
    lienzo.builtImagePredet();
}

function cargarMenu() {
    /**
     * OPCIONES DE MENU
     */

    /**
     *  ## BOTON PIZARRA PREDETERMINADA
     * */
    let btn_pizarra = document.querySelector(".pizarra");
    btn_pizarra.addEventListener("click", builtPizarra);
    /**
     *  ## BOTON CUADRO PREDETERMINADA
     * */
    let btn_cuadro = document.querySelector(".cuadro");
    btn_cuadro.addEventListener("click", builtCuadro);
    /**
     *  ## BOTON EN BLANCO
     * */
    let btn_en_blanco = document.querySelector(".en_blanco");
    btn_en_blanco.addEventListener("click", builtEnBlanco);
    
    /**
     *  # FILTROS
     */

        /**
     *  ## FILTRO GRISES
     * */

    let btn_grises = document.querySelector(".grises");
    btn_grises.addEventListener('click', filtrarGris);
    
    function filtrarGris() {
        filtro = new FiltroGris(lienzo);
        filtro.filtrar();
    }

    /**
     *  # HERRAMIENTAS
     * */
    
    /**
     *  ## HERRAMIENTA LAPIZ
     * */
    let isSetLapiz = false;
    let punto_inicio = null;
    
    let btn_lapiz = document.querySelector(".lapiz");
    btn_lapiz.addEventListener('click', setLapiz);
    
    function setLapiz() {
        if(isSetGoma) {
            unsetGoma();
        }
        canvas.addEventListener('mousedown', trazarLinea);
        canvas.addEventListener('mousemove', trazarLinea);
        canvas.addEventListener('mouseup', trazarLinea);
        isSetLapiz = true;
    }
    
    function unsetLapiz() {
        canvas.removeEventListener('mousedown', trazarLinea);
        canvas.removeEventListener('mousemove', trazarLinea);
        canvas.removeEventListener('mouseup', trazarLinea);
        isSetLapiz = false;
    }
    
    /**
     *  ## HERRAMIENTA GOMA
     * */
    let isSetGoma = false;
    let gomaSize = 20;
    
    let btn_goma = document.querySelector(".goma");
    btn_goma.addEventListener('click', setGoma);

    let range_goma = document.querySelector(".gomaRange");
    range_goma.addEventListener('change', function (e) {
        gomaSize = e.target.value;
    })
    
    function setGoma() {
        if(isSetLapiz) {
            unsetLapiz();
        }
        canvas.addEventListener('mousedown', borrarLinea);
        canvas.addEventListener('mousemove', borrarLinea);
        canvas.addEventListener('mouseup', borrarLinea);
        isSetGoma = true;
    }
    
    function unsetGoma() {
        canvas.removeEventListener('mousedown', borrarLinea);
        canvas.removeEventListener('mousemove', borrarLinea);
        canvas.removeEventListener('mouseup', borrarLinea);
        isSetGoma = false;
    }

    /**
     *  ## FUNCIONES DE DIBUJO
     */  
    function trazarLinea(e) {
        if(punto_inicio != null) {
            let origen = punto_inicio;
            let destino = new Punto(this, e.layerX, e.layerY);
            if(origen.dibujar(destino)) {
                if(e.type == 'mouseup') {
                    punto_inicio = null;
                } else {
                    punto_inicio = destino;
                }
            }
        } else if (e.type == 'mousedown'){
            punto_inicio = new Punto(canvas, e.layerX, e.layerY);
        }
    }

    function borrarLinea(e) {
        if(punto_inicio != null) {
            let origen = punto_inicio;
            let destino = new Punto(this, e.layerX, e.layerY);
            origen.borrar(gomaSize, gomaSize);
            if(e.type == 'mouseup') {
                punto_inicio = null;
            } else {
                punto_inicio = destino;
            }
        } else if (e.type == 'mousedown'){
            punto_inicio = new Punto(canvas, e.layerX, e.layerY);
        }
    }
}