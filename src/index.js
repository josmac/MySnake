const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

document.querySelector("#toggle").onclick = function() {
    game.start();
    this.onclick=null;
}


