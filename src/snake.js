class Snake {
    constructor(ctx){
        this.ctx = ctx
        this.snake = [ {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
        this.vx = 10
        this.vy = 0
        this.setListeners()

    }

    draw() {
        this.snake.forEach((snakePart) => {
            this.ctx.fillStyle = 'lightgreen';  
            this.ctx.strokestyle = 'darkgreen';
            this.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
            this.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        });
    }

    move(){
        const head = {x: this.snake[0].x + this.vx, y: this.snake[0].y + this.vy};
        this.snake.unshift(head);
        this.snake.pop();
    }

    setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP && this.vy !== 10) {
                this.vy = -10;
                this.vx = 0
            } else if (e.keyCode === RIGHT && this.vx !== -10) {
                this.vx = 10;
                this.vy = 0;
            } else if (e.keyCode === DOWN && this.vy !== -10 ) {
                this.vy = 10;
                this.vx = 0
            } else if (e.keyCode === LEFT && this.vx !== 10) {
                this.vx = -10;
                this.vy = 0;
            }
        })
    }

}