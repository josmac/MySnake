class Snake {
    constructor(ctx){
        this.ctx = ctx
        this.body = [ {x: 140, y: 140},  {x: 120, y: 140},  {x: 100, y: 140},  {x: 80, y: 140},  {x: 60, y: 140},];
        this.vx = 20
        this.vy = 0
        this.food = new Food(ctx)
        
        this.changeDirection = false

        this.img = new Image()
        this.img.frames = 4
        this.img.columnIndex = 0
        this.img.rowIndex = 0
        this.img.src = './img/sprite.png'

        this.setListeners()
        this.changeDirection = false

    }

    drawSprite(bodyPart) {
        this.ctx.drawImage(
            this.img,
            this.img.columnIndex * this.img.width / this.img.frames,
            this.img.rowIndex * this.img.width / this.img.frames,
            this.img.width / this.img.frames,
            this.img.height / this.img.frames,
            bodyPart.x,
            bodyPart.y,
            20,
            20
        )
    }


    draw() {
        this.body.forEach((part) => {
            if (part.x + 20 > this.ctx.canvas.width) {
                part.x = 0;
            } 
            if (part.y + 20 > this.ctx.canvas.height) {
                part.y = 0;
            }
            if (part.x < 0) {
                part.x = this.ctx.canvas.width
            }
            if (part.y < 0) {
                part.y = this.ctx.canvas.height
            }

            const indexPart = this.body.indexOf(part)
            
            const faceRight = indexPart === 0 && this.vx === 20;
            const faceUp = indexPart === 0 && this.vy === -20;
            const faceLeft = indexPart === 0 && this.vx === -20;
            const faceDown = indexPart === 0 && this.vy === 20;

            const tailRight = indexPart === this.body.length-1 && part.x - (this.body[this.body.length-2].x) === -20;
            const tailUp = indexPart === this.body.length-1 && part.y - (this.body[this.body.length-2].y) === 20;
            const tailLeft = indexPart === this.body.length-1 && part.x - (this.body[this.body.length-2].x) === 20;
            const tailDown = indexPart === this.body.length-1 && part.y - (this.body[this.body.length-2].y) === -20;

            const elbowUpLeft = indexPart > 0 && indexPart < this.body.length-1 && part.y - (this.body[indexPart-1].y) === 20 && part.x - (this.body[indexPart+1].x) === 20;
            

            console.log(elbowUpLeft)
            

            switch (true) {
                case (faceRight):
                    this.img.columnIndex = 0;
                    this.img.rowIndex = 0;
                    this.drawSprite(part);
                    break;
                case (faceUp):
                    this.img.columnIndex = 1;
                    this.img.rowIndex = 0;
                    this.drawSprite(part);
                    break;
                case (faceDown):
                    this.img.columnIndex = 3;
                    this.img.rowIndex = 0;
                    this.drawSprite(part);
                    break;
                case (faceLeft):
                    this.img.columnIndex = 2;
                    this.img.rowIndex = 0;
                    this.drawSprite(part);
                    break;
                case (tailRight):
                    this.img.columnIndex = 2;
                    this.img.rowIndex = 1;
                    this.drawSprite(part);
                    break;
                case (tailUp):
                    this.img.columnIndex = 3;
                    this.img.rowIndex = 1;
                    this.drawSprite(part);
                    break;
                case (tailDown):
                    this.img.columnIndex = 1;
                    this.img.rowIndex = 1;
                    this.drawSprite(part);
                    break;
                case (tailLeft):
                    this.img.columnIndex = 0;
                    this.img.rowIndex = 1;
                    this.drawSprite(part);
                    break;
                case (elbowUpLeft):
                    this.img.columnIndex = 3;
                    this.img.rowIndex = 2;
                    this.drawSprite(part);
                // default:
                //     this.ctx.fillStyle = '#1adfed';  
                //     this.ctx.fillRect(part.x, part.y, 20, 20);
            }

            

            // this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            // this.ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
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
            this.changeDirection = true
        });
    }

}