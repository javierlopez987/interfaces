# Anotaciones Entregable TP2
## Tener en cuenta
Imagen de fondo del tablero hacerla tipo textura (de madera, de plastico)
con circulos para fichas
como si fuesen dos capas
y de fondo las fichas que se estan dibujando

Flujo de renderizado:
El orden de renderizado es:
1ro las fichas,
2do el tablero
--> esto en una funcion redibujarCanvas (o similar)
Manejar capas de renderizado!!!

Jugar con dos imagenes:
1) la del fondo (madera oscura)
2) la del frente

(Ver Email de Cristian)
Tener una textura para cada uno de los cuadraditos, tipo tapitas de cada ficha.

## Flujo de juego
1) Comienza --> start
2) Turno proximo jugador --> nextGameRound
3) Chequea jugada valida --> checkMove
4) Chequea ganador --> checkWinner
4-a) No hay ganador
    Vuelve al 2)
4-b) Hay ganador
    Pasa al 5)
5) Finaliza el juego --> finish