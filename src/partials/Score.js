import { SVG_NS } from "../settings";
export default class Score {
  constructor(x, y, size, player1, player2) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.player1 = player1;
    this.player2 = player2;
  }
  render(svg) {
    //`<text x="SOME X" y="SOME Y" font-family="&quot;Silkscreen Web&quot;, monotype" font-size="30" fill="white">THE SCORE</text>`
    let text = document.createElementNS(SVG_NS, "text");
    text.setAttributeNS(null, "x", this.x);
    text.setAttributeNS(null, "y", this.y);
    text.setAttributeNS(null, "font-family", "Arial");
    text.setAttributeNS(null, "font-size", this.size);
    text.setAttributeNS(null, "fill", "#FFFFFF");
    text.innerHTML = `${this.player1.score} : ${this.player2.score}`;
    svg.appendChild(text);
  }
}
