// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItem = document.querySelector('.gallery');

const imageItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
	 class="gallery__image"
	 src="${preview}"
	 data-source="${original}"
	 alt="${description}"
  />
</a>
</li>`
  )
  .join('');

galleryItem.insertAdjacentHTML('beforeend', imageItem);
galleryItem.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const galleryImageSrc = e.target.dataset.source;
  const galleryAltText = e.target.alt;

  const instance = basicLightbox.create(`
    <img src="${galleryImageSrc}" alt="${galleryAltText}" width="800" height="600">,
`);

  instance.show();

  const escapePress = e => {
    if (e.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', escapePress);
    }
  };
  document.addEventListener('keydown', escapePress);
});

console.log(galleryItems);
