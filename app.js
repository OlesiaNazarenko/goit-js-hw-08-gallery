const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
//====================== 1.Creating gallery markup=================================
const gallery = document.querySelector(".gallery");
const creatingGallery =  galleryItems.map(item => {
    return `<li class="gallery__item" >
      <a class="gallery__link" href="#" >
      <img
      class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}";
       alt="${item.description}"
     />
      </a>
      </li>`;
  }).join('');
gallery.insertAdjacentHTML('beforeend', creatingGallery);
 //====================== 2=================================
// делегирование: на одного родитеоя повесить один слушатель а не на кажду ли по слушателю.если события одинаковые на однотипной коллекции
// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// событие одно и то же для каждой ли и и тогда циклом прогнать это событие
// Открытие модального окна по клику на элементе галереи.
// нужно сделать проверку что клик произошел по ли
// if (e.target.nodeName !== 'LI')
// <!--
//       Модальное окно для полноразмерного изображения
//       Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс //z
//     -->
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeModalBtn =  document.querySelector('.lightbox__button');
gallery.addEventListener('click', toggleModal);
 

function toggleModal(evt) {
  if (evt.currentTarget.classList.contains('gallery__item')) {
    return;
  };
  
  lightbox.classList.toggle('is-open');
   

}
function addContentToLightbox() {
  if (!lightbox.classList.contains('is-open')) {
   
    const a = galleryItems.map(item => { lightboxImg.setAttribute('src', '${item.original}'); lightboxImg.setAttribute('alt', '${item.description}');  } );
      // lightboxImg.setAttribute('alt', '${item.description}');
      //return imgAttr;
    return a
  }
}
function closeModalByOverlay(evt) {
  if ( evt.currentTarget.classList.contains('lightbox__overlay')) 
  lightbox.classList.toggle('is-open');
}
function closeModalByEsc(evt) {
  if (  evt.key === 'Escape' ) {
       lightbox.classList.remove('is-open'); 
    }
}
gallery.addEventListener('click', toggleModal);
addContentToLightbox();
closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', closeModalByEsc); 
overlay.addEventListener('click', closeModalByOverlay);
console.log(lightboxImg.getAttribute('src'));








