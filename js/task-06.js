// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на
// правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили
// в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputLosesFocus);

function onInputLosesFocus(event) {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    // inputEl.style.border = "2px solid #4caf50"; // и так работает
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    console.log("РАВНО");
  } else {
    // inputEl.style.border = "2px solid #f44336"; // и так работает
    inputEl.classList.add("invalid");
    console.log("НЕ РАВНО");
  }
}

// console.dir(inputEl);
// console.dir(Number(inputEl.dataset.length));
// console.log(inputEl.value.length);
