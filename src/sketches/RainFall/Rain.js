import { getAngleInTheta } from "../helper";
import { WIND_OPTION } from "../constants";

class Drop {
    constructor(p5, xPosition, yPosition, distance, wind, color) {
        this.p5 = p5;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.color = color;

        this.wind = wind;
        this.distance = distance;

        this.MAX_DISTANCE = 400;
        this.MIN_DISTANCE = 0;
        this.MIN_LENGTH = 8;
        this.MAX_LENGTH = 20;
        this.MIN_Y_SPEED = 5;
        this.MAX_Y_SPEED = 12;
        this.MIN_STROKE = 1;
        this.MAX_STROKE = 3;
    }

    getWidth = () => {
        return this.p5.map(this.distance, this.MAX_DISTANCE, this.MIN_DISTANCE, this.MIN_STROKE, this.MAX_STROKE, true);
    }

    getYspeed = () => {
        return this.p5.map(this.distance, this.MAX_DISTANCE, this.MIN_DISTANCE, this.MIN_Y_SPEED, this.MAX_Y_SPEED, true);
    }

    getLength = () => {
        const length = this.p5.map(this.distance, this.MAX_DISTANCE, this.MIN_DISTANCE, this.MIN_LENGTH, this.MAX_LENGTH, true);
        
        return length;
    }

    getNextPosition = () => {
        return [
            this.xPosition + this.getLength() * Math.cos(getAngleInTheta(this.wind)),
            this.yPosition + this.getLength() * Math.sin(getAngleInTheta(this.wind))
        ];
    }

    display = () => {
        this.p5.stroke(this.color);  
        this.p5.strokeWeight(this.getWidth());

        const [nextXPosition, nextYPosition] = this.getNextPosition();
        this.p5.line(this.xPosition, this.yPosition, nextXPosition, nextYPosition);
    }

    fall = () => {
        this.yPosition += this.getYspeed();
        this.xPosition += this.wind / 80;

        if (this.dropped()) {
            this.resetYPosition();
            this.resetDistance();
            this.resetXPosition();
        }
        if (this.outsideLeft()) {
            this.xPosition = this.p5.width;
        }
        if (this.outsideRight()) {
            this.xPosition = 0;
        }
    }

    dropped = () => {
        if (this.yPosition > this.p5.height) {
            return true;
        }

        return false;
    }

    outsideRight = () => {
        return this.xPosition > this.p5.width;
    }

    outsideLeft = () => {
        return this.xPosition < 0;
    }

    resetYPosition = () => {
        this.yPosition = this.p5.random(-100, -200);
    }

    resetDistance = () => {
        this.distance = this.p5.random(this.MIN_DISTANCE, this.MAX_DISTANCE);
    }

    resetXPosition = () => {
        this.xPosition = this.p5.random(this.p5.width);
    }
}

class Rain {
    constructor(p5, width, height, color) {
        this.p5 = p5;

        this.width = width;
        this.height = height;
        this.color = color;
        this.windOption = WIND_OPTION;

        this.rainDrops = []
        const averageDrop = parseInt(p5.map(width, 0, 1200, 200, 800));
        const delta = parseInt(p5.map(width, 300, 1200, 16, 128))
        this.numberOfDrops = parseInt(p5.random(averageDrop - delta, averageDrop + delta));
    }

    createRainDrops = () => {
        const windIndex = parseInt(this.p5.random(this.windOption.length));
        const inLeft = parseInt(this.p5.random(2));
        const wind = inLeft ? this.windOption[windIndex] * -1 : this.windOption[windIndex];

        for (var i = 0; i < this.numberOfDrops; i++) {
            const xPosition = this.p5.random(this.width);
            const yPosition = this.p5.random(-this.height, 0);
            const distance = this.p5.random(this.width);
            this.rainDrops.push(new Drop(this.p5, xPosition, yPosition, distance, wind, this.color));
        }
    }

    display = () => {
        this.rainDrops.forEach(rainDrop => {
            rainDrop.display();
            rainDrop.fall();
        });
    }
}

export default Rain;
