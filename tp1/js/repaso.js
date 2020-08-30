document.addEventListener("DOMContentLoaded", function() {
    let ancho = 100;
    let alto = 100;
    let cant_num = 1000000;

    let matriz_random = crearMatriz(ancho, alto, cant_num);
    console.table(matriz_random);

    let max = getMax(matriz_random, 0);
    console.log(max);

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
     *  Retorna el valor máximo de una matriz
     */
    function getMax(mat, ini_num) {
        let max = ini_num;

        mat.forEach(row => {
            row.forEach(col => {
                if(col > max) {
                    max = col;
                }
            });
        });

        return max
    }
})