const HEADER = document.getElementById("header");
const TITLE = HEADER.querySelectorAll(":scope h1")[0];
const TEXT = TITLE.innerText;

TITLE.innerText = "";

Array.from(TEXT).forEach((element) => {
  let span = document.createElement("span");
  span.innerText = element;
  let hue = Math.random() * 360;
  span.style = `color: hsl(${hue}, 95%, 80%)`;
  TITLE.appendChild(span);
});
