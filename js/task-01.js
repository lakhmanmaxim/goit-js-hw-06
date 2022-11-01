// Задание 1
// =========    1.1 Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. // Результат: Number of categories: 3

const categoriesItemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemsEl.length);
// console.log("categoriesItemsEl", categoriesItemsEl);

// =========    1.2 Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
// количество элементов в категории(всех вложенных в него < li >).

// Результат:
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const titlesOfItemsEl = document.querySelectorAll(".item h2");
// console.log("titleOfCategoryItemsEl", titlesOfItemsEl);

const textTitles = [];
const numbersElementsOfItemsEl = [];

for (const item of titlesOfItemsEl) {
  textTitles.push(item.textContent);
}

for (let i = 0; i < categoriesItemsEl.length; i += 1) {
  // console.log(categoriesItemsEl[i]);
  numbersElementsOfItemsEl.push(
    categoriesItemsEl[i].querySelectorAll("li").length
  );
}

for (let i = 0; i < textTitles.length; i += 1) {
  // console.log(textTitles[i]);

  for (let k = 0; k < numbersElementsOfItemsEl.length; k += 1) {
    // console.log(numbersElementsOfItemsEl[k]);

    if (([i] = [k])) {
      console.log("Category:", textTitles[i]);
      console.log("Elements:", numbersElementsOfItemsEl[k]);
    }
  }
}
