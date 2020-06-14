class Food {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.x = 0;
        this.y = 0;

        this.img = new Image()
        this.img.frames = 5
        this.img.columnIndex = 0
        this.img.src = './img/food.png'

    }

    create() {
        this.x = Math.floor((Math.random() * this.w)/20)*20;
        this.y = Math.floor((Math.random() * this.h)/20)*20;
        this.img.columnIndex = Math.floor(Math.random()*this.img.frames);  
    }

    draw() {
        
        this.ctx.drawImage(
            this.img,
            this.img.columnIndex * this.img.width / this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            20,
            20
        )

    }


}