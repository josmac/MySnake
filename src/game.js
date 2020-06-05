class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(ctx);
        this.intervalId = null;
    }

    // start() {
    //     this.intervalId = setInterval(() => {
    //         this.clear()
    //         this.draw()
    //         this.move()
    //     }, 1000/5)
    // }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.snake.draw();
    }

    move() {
        this.snake.move();
    }

}