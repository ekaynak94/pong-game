import {
  SVG_NS,
  KEYS,
  paddleWidth,
  paddleHeight,
  boardGap,
  ballRadius,
  scoreBoardSize,
  finalScore
} from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.pause = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.player1Name = "Player1";
    this.player2Name = "Player2";
    this.startNewGame();

    document.addEventListener("keydown", event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    });
  }

  startNewGame() {
    this.player1Name = prompt("Enter player 1's name:");
    this.player2Name = prompt("Enter player 2's name:");
    this.player1 = new Paddle(
      this.player1Name,
      this.height,
      paddleWidth,
      paddleHeight,
      boardGap,
      (this.height - paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    this.player2 = new Paddle(
      this.player2Name,
      this.height,
      paddleWidth,
      paddleHeight,
      this.width - (boardGap + paddleWidth),
      (this.height - paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );
    this.ball = new Ball(ballRadius, this.width, this.height);
    this.score1 = new Score(
      this.width / 2 - scoreBoardSize * 3,
      scoreBoardSize * 2,
      scoreBoardSize
    );
    this.score2 = new Score(
      this.width / 2 + 2.5 * scoreBoardSize,
      scoreBoardSize * 2,
      scoreBoardSize
    );
  }
  gameOver() {
    let winner;
    if (this.player1.score > this.player2.score) {
      winner = this.player1.name;
    } else {
      winner = this.player2.name;
    }
    alert(
      `The winner of the game is: ${winner}. Press "OK" to start a new game.`
    );
  }

  render() {
    if (this.pause === true) {
      return;
    }
    if (
      this.player1.score === finalScore ||
      this.player2.score === finalScore
    ) {
      this.gameOver();
      this.startNewGame();
    }
    this.gameElement.innerHTML = "";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    svg.setAttributeNS(null, "version", "1.1");
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}
