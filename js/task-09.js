// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

const buttonChangeColor = document.querySelector(".change-color");
const spanColorText = document.querySelector(".color");
const body = document.querySelector("body");

buttonChangeColor.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor(e) {
  spanColorText.textContent = getRandomHexColor();

  body.style.backgroundColor = getRandomHexColor();
}
