const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)
const bg = new Background(ctx)



window.onload = function() {
    bg.firstBoard()
}

const toggle = document.querySelector(".toggle")

toggle.onclick = function() {
    if (game.intervalId === null) {
        toggle.classList.add("clicked");
        game.reset()
        game.start()
        this.innerText = 'START'
    }
}


