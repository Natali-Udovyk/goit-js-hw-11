// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a');

export function renderGalleryItems(images) {
    const gallery = document.querySelector('.gallery');
    
    
    
    gallery.innerHTML = '';
    if (!Array.isArray(images) || images.length === 0) {
        console.error('Масив images порожній або не є масивом');
        return; 
    }
    
    gallery.innerHTML = images.map((image) => `
        <a class= "gallery-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" class="gallery-image" alt="${image.tags}" />
            <div class="info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </a>
    `).join('');
    lightbox.refresh();
}
