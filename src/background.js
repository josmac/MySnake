class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.x = 0;
        this.y = 0;

        this.board1 = new Image()
        this.board1.src = './img/Board1.png'

        this.board2 = new Image()
        this.board2.src = './img/Board2.png'

        this.board3 = new Image()
        this.board3.src = './img/Board3.png'

    }

    firstBoard() {
        this.ctx.drawImage(
            this.board1,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
    secondBoard() {
        this.ctx.drawImage(
            this.board2,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
    thirdBoard() {
        this.ctx.drawImage(
            this.board3,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }
}