import EnemyController from "./EnemyController.js";
import BulletController from "./BulletController.js";
import Player from "./Player.js";

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./src/assets/images/space.png"

const playerBulletController = new BulletController(canvas, 10, "white", true);
const enemyBulletController = new BulletController(canvas, 4, "red", false);

const enemyController = new EnemyController(
    canvas,
    enemyBulletController,
    playerBulletController,
);

const player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;
function checkGameOver() {
    if(isGameOver) 
        return;
}
     
     if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
     }
     if(enemyController.collideWith(player)) {
        isGameOver = true;
     }

     if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
     }

     function displayGameOver() {
        if(isGameOver) {
            let text = didWin ? "Você ganhou!" : "Game Over";
            let textOffset = didWin ? 5 : 3.6;
            ctx.fillStyle = "white";
            ctx.font = "35px 'Press Start 2P'"
            ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
        }
     }
         