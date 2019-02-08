import { SVG_NS } from "../settings";
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = (Math.floor(Math.random() * 2) - 0.5) * 2;
    this.color = "#FFFFFF";
    this.reset();
  }
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    do {
      this.vy = Math.floor(Math.random() * 10 - 5);
    } while (this.vy === 0);
    this.direction = (Math.floor(Math.random() * 2) - 0.5) * 2;
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }
  render(svg, player1, player2) {
    let circle = document.createElementNS(SVG_NS, "circle");
    this.x += this.vx;
    this.y += this.vy;
    this.paddleCollision(player1, player2);
    this.wallCollison();
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "fill", this.color);
    svg.appendChild(circle);
  }
  wallCollison() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
    if (hitLeft || hitRight) {
      this.reset();
    } else if (hitTop || hitBottom) {
      this.vy = -1 * this.vy;
    }
  }

  paddleCollision(player1, player2) {
    let paddleSideHit = false;
    let paddleTopHit = false;
    let paddleBottomHit = false;
    if (this.vx > 0) {
      let paddle = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );
      paddleSideHit =
        this.x + this.radius >= paddle.leftX &&
        this.x + this.radius <= paddle.rightX &&
        this.y >= paddle.topY &&
        this.y <= paddle.bottomY;
      paddleTopHit =
        this.x >= paddle.leftX &&
        this.x <= paddle.rightX &&
        this.y + this.radius >= paddle.topY &&
        this.y - this.radius <= paddle.bottomY;
      paddleBottomHit =
        this.x >= paddle.leftX &&
        this.x <= paddle.rightX &&
        this.y - this.radius >= paddle.topY &&
        this.y + this.radius <= paddle.bottomY;
    } else {
      let paddle = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );
      paddleSideHit =
        this.x - this.radius <= paddle.rightX &&
        this.x - this.radius >= paddle.leftX &&
        this.y >= paddle.topY &&
        this.y <= paddle.bottomY;
      paddleTopHit =
        this.x >= paddle.leftX &&
        this.x <= paddle.rightX &&
        this.y + this.radius >= paddle.topY &&
        this.y + this.radius <= paddle.bottomY;
      paddleBottomHit =
        this.x >= paddle.leftX &&
        this.x <= paddle.rightX &&
        this.y - this.radius >= paddle.topY &&
        this.y - this.radius <= paddle.bottomY;
    }
    if (paddleSideHit) {
      this.vx *= -1;
    }
    if (paddleTopHit || paddleBottomHit) {
      this.vy *= -1;
      this.vx *= -1;
    }
  }
}
