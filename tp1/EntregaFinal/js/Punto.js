class Punto {
    constructor(canvas, x, y) {
        this.contexto = canvas.getContext("2d");
        this.x = x;
        this.y = y;
    }

    dibujarLinea(otroPunto) {
        let dibujado = false;

        if(otroPunto != null) {
            this.contexto.beginPath();
            this.contexto.strokeStyle = 'black';
            this.contexto.lineWidth = 1;
            this.contexto.moveTo(this.x, this.y)
            this.contexto.lineTo(otroPunto.x, otroPunto.y);
            this.contexto.stroke();
            this.contexto.closePath();
            dibujado = true;
        }

        return dibujado;
    }
}