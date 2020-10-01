class Clock {
    constructor(posX, posY, size, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.ctx = ctx;
        this.date;
        this.hour;
        this.minute;
        this.second;
        this.hourHandSize = this.size / 2 * 0.5;
        this.minuteHandSize = this.size / 2 * 0.9;
        this.secondHandSize = this.size / 2 * 0.9;
    }
    
    getActualDate() {
        return new Date();
    }

    draw() {
        this.date = this.getActualDate();
        this.drawCase();
        this.drawHours();
        this.drawMinutes();
        this.drawSeconds();
    }

    drawCase() {
        this.ctx.fillStyle = 'tomato';
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawHours() {
        let actualHour = this.date.getHours();
        actualHour / 12 
        if(actualHour != this.hour) {
            this.hour = actualHour;
        }
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineWidth = 8.0;
        this.ctx.lineTo(this.posX + (0) * this.hourHandSize, this.posY + (-1) * this.hourHandSize);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawMinutes() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineWidth = 5.0;
        this.ctx.lineTo(this.posX + (1) * this.minuteHandSize, this.posY + (0) * this.minuteHandSize);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawSeconds() {
        let actualSecond = this.date.getSeconds();
        if(actualSecond != this.second) {
            this.second = actualSecond;
        }
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'blue';
        this.ctx.moveTo(this.posX, this.posY)
        this.ctx.lineWidth = 2.0;
        this.ctx.lineTo(this.posX + (0.5) * this.secondHandSize, this.posY + (-Math.sqrt(0.75)) * this.secondHandSize);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}