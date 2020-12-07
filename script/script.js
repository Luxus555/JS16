"use strict";

const books = document.querySelectorAll(".book"),
  fon = document.querySelector("body"),
  book3Name = document.querySelectorAll(".book")[4],
  aBook3 = book3Name.querySelector("h2>a"),
  adv = document.querySelector(".adv"),
  book25 = document.querySelectorAll("ul"),
  book2Li = book25[0].querySelectorAll("li"),
  book5Li = book25[5].querySelectorAll("li"),
  book6Li = book25[2].querySelectorAll("li");

books[1].after(books[0]);
books[5].after(books[2]);
books[4].after(books[3]);
books[2].before(books[5]);

fon.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

aBook3.innerHTML = "Книга 3. this и Прототипы Объектов";

adv.remove();

book2Li[9].after(book2Li[2]);
book2Li[3].after(book2Li[6]);
book2Li[4].before(book2Li[8]);

book5Li[1].before(book5Li[9]);
book5Li[4].after(book5Li[2]);
book5Li[7].after(book5Li[5]);

book6Li[8].insertAdjacentHTML(
  "afterbegin",
  "<li>Глава 8: За пределами ES6</li>"
);
