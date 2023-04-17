// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItem = document.querySelector('.gallery')

const imageItem = galleryItems.map(({original, preview, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
	 class="gallery__image"
	 src="${preview}"
	 data-source="${original}"
	 alt="${description}"
  />
</a>
</li>`).join('');

galleryItem.insertAdjacentHTML("beforeend", imageItem);

const lightbox = new SimpleLightbox('.gallery a', { galleryAltText: 'alt',  animationSpeed: 250 });

// Change code below this line

console.log(galleryItems);
