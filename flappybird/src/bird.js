export default class Bird {
    constructor(dimension) {
        this.dimension = dimension;
        this.heightOfBird = 320;
        this.lengthOfBird = 160;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.lengthOfBird, this.heightOfBird, 40, 30);
    }

    animate(ctx) {
        this.drawBird(ctx);
    }


}
