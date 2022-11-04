// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[type="email"]');
const inputPassEl = document.querySelector('[type="password"]');

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  //   const formDataObj = new FormData(event.currentTarget);

  if (inputEmailEl.value === "") {
    alert("Все поля должны быть заполнены !");
    window.history.back();
  }
  if (inputPassEl.value === "") {
    alert("Все поля должны быть заполнены !");
    window.history.back();
  }

  console.log(formData);

  formEl.reset();
}
