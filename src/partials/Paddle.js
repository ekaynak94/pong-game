import { SVG_NS, color, paddleSpeed } from "../settings";
export default class Paddle {
  constructor(name, boardHeight, width, height, x, y, upKey, downKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.name = name;
    this.score = 0;
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case upKey:
          this.up();
          break;
        case downKey:
          this.down();
          break;
      }
    });
  }
  up() {
    this.y = Math.max(this.y - paddleSpeed, 0);
  }
  down() {
    this.y = Math.min(this.y + paddleSpeed, this.boardHeight - this.height);
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "fill", color);
    svg.appendChild(rect);
  }
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return { leftX, rightX, topY, bottomY };
  }
}
