document.addEventListener("DOMContentLoaded", function() {
    const ANCHO = 10;
    let ALTO = 10;
    let CANT_NUM = 100;

    let matriz_random = crearMatriz();
    console.table(matriz_random);

    let max = getMax(matriz_random, 0);
    console.log(max);

    let max_min = getMaxParMinImpar(matriz_random, 0, CANT_NUM);
    console.log(max_min);

    let prom = getPromFila(matriz_random);
    console.log(prom);

    /**
     * Función de creación de matriz
     */
    function crearMatriz() {
        let mat = [];
        
        for (let x = 0; x < ANCHO; x++) {
            mat[x] = [];
    
            for (let y = 0; y < ALTO; y++) {
                mat[x][y] = Math.trunc(Math.random() * CANT_NUM); // Valor random entero
            }
        }

        return mat;
    }

    /**
     * Función que retorna el valor máximo de una matriz
     */
    function getMax(mat, max_ini) {
        let max = max_ini;

        mat.forEach(row => {
            row.forEach(elem => {
                if(elem > max) {
                    max = elem;
                }
            });
        });

        return max
    }

    /**
     * Función que retorna el valor máximo contenido en las filas pares 
     * y el valor mínimo en las filas impares en un arreglo
     */
    function getMaxParMinImpar(mat, max_ini, min_ini) {
        let max = max_ini;
        let min = min_ini;
        let result = Array();

        for (let x = 0; x < mat.length; x++) {
            let row = mat[x];
            for (let y = 0; y < row.length; y++) {
                let elem = row[y];
                if(x % 2 == 0) { // Si la fila es par
                    if(elem > max) {
                        max = elem;
                    }
                } else { // Si la fila es impar
                    if(elem < min) {
                        min = elem;
                    }
                }
            }
        }

        result["Máx"] = max;
        result["Mín"] = min;

        return result;
    }

    /**
     * Función que retorna el valor promedio de cada fila en un arreglo
     */
    function getPromFila(mat) {
        let result = Array();
        let suma_fila = 0;
        let x = 0;
        let y = 0;
        let prom = 0;

        while (x < mat.length) {
            let row = mat[x];

            y = 0;
            suma_fila = 0;

            while (y < row.length) {
                suma_fila += mat[x][y];
                y++;
            }
            prom = Math.trunc(suma_fila / row.length);
            result.push(prom);
            x++;
        }

        return result;
    }
})