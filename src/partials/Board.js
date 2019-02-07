import { SVG_NS } from "../settings";
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.backgroundColor = "#353535";
    this.color = "#FFFFFF";
    this.lineWidth = "2";
    this.dashes = "10,15";
  }
  render(svg) {
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "fill", this.backgroundColor);
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "fill", this.color);
    line.setAttributeNS(null, "stroke", this.color);
    line.setAttributeNS(null, "stroke-width", this.lineWidth);
    line.setAttributeNS(null, "stroke-dasharray", this.dashes);
    svg.appendChild(rect);
    svg.appendChild(line);
  }
}
