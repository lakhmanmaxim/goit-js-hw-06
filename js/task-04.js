// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const buttonDecrease = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrease = document.querySelector(
  'button[data-action="increment"]'
);

const span = document.querySelector("#value");

buttonDecrease.addEventListener("click", decrease);

buttonIncrease.addEventListener("click", increase);

function decrease() {
  counterValue -= 1;
  //   console.log(counterValue);
  return (span.textContent = counterValue);
}

function increase() {
  counterValue += 1;
  //   console.log(counterValue);
  return (span.textContent = counterValue);
}
