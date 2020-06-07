class Food {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.x = 0;
        this.y = 0;

    }

    create() {
        this.x = Math.floor((Math.random() * this.w)/20)*20;
        this.y = Math.floor((Math.random() * this.h)/20)*20;    
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, 20, 20);

    }


}