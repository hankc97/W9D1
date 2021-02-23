export default class Bird {
    constructor(dimension) {
        this.dimension = dimension;
        this.heightOfBird = 320;
        this.lengthOfBird = 160;
        this.velocity = 1 + 0.5;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.lengthOfBird, this.heightOfBird, 40, 30);
    
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move(){
        this.heightOfBird += this.velocity;
    }

    flap(){
        this.velocity = -8
    }

}
