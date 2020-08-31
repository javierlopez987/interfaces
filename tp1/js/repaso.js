document.addEventListener("DOMContentLoaded", function() {
    let ancho = 100;
    let alto = 100;
    let cant_num = 1000000;

    let matriz_random = crearMatriz(ancho, alto, cant_num);
    console.table(matriz_random);

    let max = getMax(matriz_random, 0);
    console.log(max);

    let max_min = getMaxParMinImpar(matriz_random, 0, cant_num);
    console.log(max_min);

    /**
     * Función de creación de matriz
     */
    function crearMatriz(ancho, alto, cant_num) {
        let mat = [];
        
        for (let x = 0; x < ancho; x++) {
            mat[x] = [];
    
            for (let y = 0; y < alto; y++) {
                mat[x][y] = Math.trunc(Math.random() * cant_num);
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
     * y el valor mínimo en las filas impares
     */
    function getMaxParMinImpar(mat, max_ini, min_ini) {
        let max = max_ini;
        let min = min_ini;
        let result = Array();

        for (let x = 0; x < mat.length; x++) {
            const row = mat[x];
            for (let y = 0; y < row.length; y++) {
                const elem = row[y];
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

        result.push(max);
        result.push(min);

        return result;
    }
})