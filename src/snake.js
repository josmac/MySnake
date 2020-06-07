class Snake {
    constructor(ctx){
        this.ctx = ctx
        this.body = [ {x: 140, y: 140},  {x: 120, y: 140},  {x: 100, y: 140},  {x: 80, y: 140},  {x: 60, y: 140},];
        this.vx = 20
        this.vy = 0
        this.food = new Food(ctx)
        this.setListeners()

    }

    draw() {
        this.body.forEach((part) => {
            if (part.x >= this.ctx.canvas.width) {
                part.x = 0
            } 
            if (part.y >= this.ctx.canvas.height) {
                part.y = 0
            }
            if (part.x < 0) {
                part.x = this.ctx.canvas.width - 20
            }
            if (part.y < 0) {
                part.y = this.ctx.canvas.height - 20
            }
            this.ctx.fillStyle = 'lightgreen';  
            this.ctx.fillRect(part.x, part.y, 20, 20);
        });
    }


    setListeners() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === UP && this.vy !== 20) {
                this.vy = -20;
                this.vx = 0;
            }
            if (e.keyCode === RIGHT && this.vx !== -20) {
                this.vx = 20;
                this.vy = 0;
            }
            if (e.keyCode === DOWN && this.vy !== -20 ) {
                this.vy = 20;
                this.vx = 0;

            }
            if (e.keyCode === LEFT && this.vx !== 20) {
                this.vx = -20;
                this.vy = 0;
            }
        });
    }

}