const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.listStyle = "none";

//
//
//

// Vresion #1
// const createGalleryItemMarkup = ({ url, alt }) => {
//   const galleryItemEl = document.createElement("li");

//   const galleryItemImgEl = document.createElement("img");
//   galleryItemImgEl.src = url;
//   galleryItemImgEl.alt = alt;
//   galleryItemImgEl.style.display = "block";

//   galleryItemEl.append(galleryItemImgEl);

//   return galleryItemEl;
// };

// console.log(createGalleryItemMarkup(images[0]));

// //
// //
// //

// const galleryItems = images.map(createGalleryItemMarkup);
// console.log(galleryItems);

// galleryEl.append(...galleryItems);
//
//
//

// Version #2
const createGalleryItemMarkup = ({ url, alt }) => {
  return `
  <li><img src="${url}" alt="${alt}"></li>
  `;
};
// console.log(createGalleryItemMarkup(images[0]));

const galleryItems = images.map(createGalleryItemMarkup).join("");
// console.log(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryItems);
