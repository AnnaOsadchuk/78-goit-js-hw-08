// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';



// UL element
const galleryContainerSlide = document.querySelector('.gallery');
// Create gallery
const galleryImagesSlide = createGallerySlide(galleryItems);

// Attach gallery to DOM
galleryContainerSlide.insertAdjacentHTML('beforeend', galleryImagesSlide);

function createGallerySlide(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" />
             </a>
        </li>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});