import "./styles/game.css";
import Game from "./partials/Game";
import { boardWidth, boardHeight } from "./settings";

// create a game instance
let game = new Game("game", boardWidth, boardHeight);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
