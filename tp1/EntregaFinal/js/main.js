'use strict';
document.addEventListener('DOMContentLoaded', cargarCanvas);
document.addEventListener('DOMContentLoaded', cargarMenu);
const WIDTH = 800;
const HEIGHT = 600;
let canvas;
let lienzo;


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

function builtVacio() {
    lienzo = new Vacio(canvas);
    lienzo.builtImagePredet();
}

function inputListener() {
    document.querySelector(".input_imagen").click();
}

function cargarImagen(e) {
    let file = e.target.files.item(0);

    let reader = new FileReader();
    reader.addEventListener('load', mostrarImagen)
    reader.readAsDataURL(file);
}

function mostrarImagen(e) {
    let path = e.target.result;
    lienzo = new Imagen(canvas);
    lienzo.builtImagePredet(path);
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
     *  ## BOTON CARGAR IMAGEN
     * */
    let btn_cargar_imagen = document.querySelector(".cargar_imagen");
    btn_cargar_imagen.addEventListener("click", inputListener);
    let input_imagen = document.querySelector(".input_imagen");
    input_imagen.addEventListener("change", cargarImagen);
    
    /**
     *  ## BOTON DESCARTAR
     * */
    let btn_descartar = document.querySelector(".descartar");
    btn_descartar.addEventListener("click", builtVacio);   
    /**
     *  ## BOTON GUARDAR
     * */
    let btn_guardar = document.querySelector(".guardar");
    btn_guardar.addEventListener("click", guardar);

    function guardar() {
        let path = canvas.toDataURL();
        let link = document.createElement("a");
        link.href = path;
        link.setAttribute("download", "Imagen");
        link.click();
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
        canvas.addEventListener('mouseout', trazarLinea);
        isSetLapiz = true;
    }
    
    function unsetLapiz() {
        canvas.removeEventListener('mousedown', trazarLinea);
        canvas.removeEventListener('mousemove', trazarLinea);
        canvas.removeEventListener('mouseup', trazarLinea);
        canvas.removeEventListener('mouseout', trazarLinea);
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