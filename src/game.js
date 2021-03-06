class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.snake = new Snake(ctx)
        this.food = new Food(ctx)
        this.background = new Background(ctx)
        this.intervalId = null
        this.score = 0

        this.img = new Image()
        this.img.src = './img/gameOver.png'

        
    }

    reset() {
        this.snake.body = [ {x: 140, y: 140},  {x: 120, y: 140},  {x: 100, y: 140},  {x: 80, y: 140},  {x: 60, y: 140},];
        this.snake.vx = 20;
        this.snake.vy = 0;
        document.getElementById('score').innerHTML = 0;
    }

    start() {
        this.food.create();
        this.foodSnakeOverlap();
        
        this.intervalId = setInterval( () => {
            this.clear();
            this.draw();
            this.snakeState();
            this.checkCollisions();
            this.levelInterval();
        }, 200)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.score = 0;
        
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    draw() {
        this.levelBoard();
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
        this.snake.changeDirection = true
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
            let bodyCollision = this.snake.body[0].x === this.snake.body[i].x && this.snake.body[0].y === this.snake.body[i].y;
            if (bodyCollision) {
                this.gameOver()
            }
        }
        let canvasCollision = this.snake.body[0].x < 0 || this.snake.body[0].y < 0 || this.snake.body[0].x + 20 > this.ctx.canvas.width || this.snake.body[0].y + 20 > this.ctx.canvas.height;

        if (canvasCollision) {
            this.gameOver()
        }
    }

    gameOver() {
        this.stop()

        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.closePath();
        this.ctx.drawImage(
            this.img,
            40,
            190,
            417,
            98,
        );

        document.querySelector(".toggle").classList.remove('clicked')
    
    }

    levelBoard() {
        if (this.score < 50) {
            this.background.firstBoard();
        }
        if (this.score < 100 && this.score >= 50) {
            this.background.secondBoard();
        }
        if (this.score >= 100) {
            this.background.thirdBoard();
        }
    }

    levelInterval () {

        if (this.score < 100 && this.score >= 50) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval( () => {
                this.clear();
                this.draw();
                this.snakeState();
                this.checkCollisions();
                this.levelInterval();
            }, 150)
        }
        if (this.score >= 100) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval( () => {
                this.clear();
                this.draw();
                this.snakeState();
                this.checkCollisions();
                this.levelInterval();
            }, 100)
        }
    }


}