import { SVG_NS, color, boardColor, lineWidth, dashes } from "../settings";
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", boardColor);
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "fill", color);
    line.setAttributeNS(null, "stroke", color);
    line.setAttributeNS(null, "stroke-width", lineWidth);
    line.setAttributeNS(null, "stroke-dasharray", dashes);
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}
