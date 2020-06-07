class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(ctx);
        this.food = new Food(ctx);
        this.intervalId = null;
        this.score = 0;
    }

    start() {
        this.food.create();
        this.foodSnakeOverlap();
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.snakeState();
            this.checkCollisions();
        }, 1000/5)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    draw() {
        this.food.draw();
        this.snake.draw();
    }

    snakeState(){
        const head = {x: this.snake.body[0].x + this.snake.vx, y: this.snake.body[0].y + this.snake.vy};
        this.snake.body.unshift(head);
        if (this.snake.body[0].x === this.food.x && this.snake.body[0].y === this.food.y) {
            this.foodSnakeOverlap();
            this.score += 10;
            document.getElementById('score').innerHTML = this.score;
        } else {
            this.snake.body.pop();

        }
    }

    foodSnakeOverlap() {
        this.snake.body.forEach( (part) => {
            if (this.food.x === part.x && this.food.y === part.y) {
                this.food.create();
            }
            
        })
    }

    checkCollisions() {
        for(let i = 1; i < this.snake.body.length; i++) {
            const collision = this.snake.body[0].x === this.snake.body[i].x && this.snake.body[0].y === this.snake.body[i].y;
            if (collision) {
                this.gameOver()  
            }
        }
    }

    gameOver() {
        clearInterval(this.intervalId)
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "GAME OVER",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
    }

}