class Clock {
    constructor(posX, posY, radius, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.ctx = ctx;
        this.date;
        this.hour;
        this._xHourHand;
        this._yHourHand;
        this.minute;
        this._xMinuteHand;
        this._yMinuteHand;
        this.second;
        this.hourHandSize = this.radius * 0.5;
        this.minuteHandSize = this.radius * 0.9;
        this.secondHandSize = this.radius * 0.9;
    }
    
    getActualDate() {
        return new Date();
    }

    draw() {
        this.date = this.getActualDate();
        this.drawCase();
        this.drawMinutes();
        this.drawHours();
        this.drawSeconds();
    }

    drawCase() {
        this.ctx.fillStyle = 'tomato';
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.drawHoursCase();
        this.drawMinutesCase();
    }

    drawHours() {
        let angle, hourHandPosition;
        let actualHour = this.date.getHours();
        if(actualHour != this.hour) {
            this.hour = actualHour;
        }
        hourHandPosition = this.hour / 12 + this.minute / 720;
        angle = hourHandPosition * Math.PI * 2 - Math.PI / 2;
        this._xHourHand = this.posX + Math.cos(angle) * this.hourHandSize;
        this._yHourHand = this.posY + Math.sin(angle) * this.hourHandSize;

        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 8.0;
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this._xHourHand, this._yHourHand);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawMinutes() {
        let angle;
        let actualMinute = this.date.getMinutes();
        if(actualMinute != this.minute) {
            this.minute = actualMinute;
            angle = (actualMinute / 60) * Math.PI * 2 - Math.PI / 2;
            this._xMinuteHand = this.posX + Math.cos(angle) * this.minuteHandSize;
            this._yMinuteHand = this.posY + Math.sin(angle) * this.minuteHandSize;
        }

        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 5.0;
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this._xMinuteHand, this._yMinuteHand);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawSeconds() {
        let angle, _x, _y;
        this.second = this.date.getSeconds();
        angle = (this.second / 60) * Math.PI * 2 - Math.PI / 2;
        _x = this.posX + Math.cos(angle) * this.secondHandSize;
        _y = this.posY + Math.sin(angle) * this.secondHandSize;

        this.ctx.beginPath();
        this.ctx.strokeStyle = 'blue';
        this.ctx.lineWidth = 2.0;
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(_x, _y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawHoursCase() {
        const HOURS = 12;

        for (let index = 0; index < HOURS; index++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'green';
            this.ctx.lineWidth = 20.0;
            let angle = (index / HOURS) * Math.PI * 2 - Math.PI / 2;
            this.ctx.moveTo(this.posX + Math.cos(angle) * this.radius * 0.80, this.posY - Math.sin(angle) * this.radius * 0.80);
            this.ctx.lineTo(this.posX + Math.cos(angle) * this.radius, this.posY - Math.sin(angle) * this.radius);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    drawMinutesCase() {
        const MINUTES = 60;
        
        for (let index = 0; index < MINUTES; index++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'green';
            this.ctx.lineWidth = 5.0;
            let angle = (index / MINUTES) * Math.PI * 2 - Math.PI / 2;
            this.ctx.moveTo(this.posX + Math.cos(angle) * this.radius * 0.90, this.posY - Math.sin(angle) * this.radius * 0.90);
            this.ctx.lineTo(this.posX + Math.cos(angle) * this.radius, this.posY - Math.sin(angle) * this.radius);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}