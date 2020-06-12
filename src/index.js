const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)



window.onload = function() {
    const board1 = new Image()
    board1.src = './img/Board1.png'
    ctx.drawImage(
        board1,
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    )

}

document.querySelector("#toggle").onclick = function() {
    if (game.intervalId === null) {
        game.reset()
        game.start()
        this.innerText = 'START'
    }
}


