{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", changeSpanTextContent);

function changeSpanTextContent(event) {
  if (input.value === "") {
    span.textContent = " Anonymous!";
  } else {
    span.textContent = event.currentTarget.value;
  }
}
