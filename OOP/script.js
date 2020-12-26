"use strict";

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  newElem() {
    if (this.selector[0] === ".") {
      let newDiv = document.createElement("div");
      newDiv.classList.add(this.selector);
      newDiv.style.cssText =
        "height: $(this.height); width: $(this.width); background: $(this.bg); font-size: $(this.fontSize);";
      newDiv.innerHTML = "<h2>Merry Christmas!</h2>";
      document.body.append(newDiv);
    } else if (this.selector[0] === "#") {
      let newP = document.createElement("p");
      newP.id = this.selector;
      newP.style.cssText =
        "height: $(this.height); width: $(this.width); background: $(this.bg); font-size: $(this.fontSize);";
      newP.innerHTML = "<p>Я новый параграф!</p>";
      document.body.append(newP);
    }
  }
}
const test = new DomElement(".block", "200px", "200px", "white", "16px");
test.newElem();

const test2 = new DomElement("#block", "250px", "250px", "white", "20px");
test2.newElem();
