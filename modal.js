import galleryItems from './app.js';

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeModalBtn = document.querySelector('.lightbox__button');

const creatingGallery =  galleryItems.map((item, index) => {
    return `<li class="gallery__item" >
      <a class="gallery__link" href="${item.original}" >
      <img
      class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}";
       alt="${item.description}"
       data-index = "${index}";
     />
      </a>
      </li>`;
  }).join('');
gallery.insertAdjacentHTML('beforeend', creatingGallery);

function openModal(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  lightbox.classList.add('is-open');
  galleryItems.forEach(item => {
    if (evt.target.getAttribute('src') === item.preview) {
      lightboxImg.setAttribute('src', item.original);
      lightboxImg.setAttribute('alt', item.description);
    }
  })
}
function closeModal(evt) { 
  if (evt.target.classList.contains('lightbox__button') || evt.target.classList.contains('lightbox__overlay') || evt.key === 'Escape' ) {
      lightbox.classList.remove('is-open');
      galleryItems.forEach(item => {lightboxImg.removeAttribute('src')})
    }
}
// const keyP = function (evt) {
//     const key = evt.code;
//     switch(key){
//         case "ArrowLeft":
//             galleryItems.forEach((item,index, arr) => {
//                 if (item.original === lightboxImg.src) {
//                     if (index === 0) {
//                         return;
//                     }
//                     lightboxImg.src = arr[index - 1].original;
//                     return;
//                 } 
//             });
//             break;
//         case "ArrowRight":
//             galleryItems.forEach((item,index, arr) => {
//                 if (item.original === lightboxImg.src) {
//                     if (index === arr.length - 1) {
//                         return;
//                     }
                    
//                     console.log(index)
//                     lightboxImg.src = arr[index  + 1].original;
//                     return;
//                 } 
//             });
// break;
// }
// }
gallery.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal); 
overlay.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//document.addEventListener('keydown', keyP)