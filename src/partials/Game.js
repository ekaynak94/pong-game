import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.ballRadius = 8;

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - (this.boardGap + this.paddleWidth),
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );
    this.ball = new Ball(this.ballRadius, this.width, this.height);
    this.pause = false;
    this.boardSize = 16;
    this.score1 = new Score(
      this.width / 2 - this.boardSize * 3,
      this.boardSize * 2,
      this.boardSize
    );
    this.score2 = new Score(
      this.width / 2 + 2.5 * this.boardSize,
      this.boardSize * 2,
      this.boardSize
    );

    document.addEventListener("keydown", event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    });
  }

  render() {
    if (this.pause !== true) {
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
}
