
import { fetchImages } from './js/pixabay-api.js';
import { renderGalleryItems } from './js/render-functions.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const searchQuery = searchInput.value;
    if (!searchQuery.trim()) {
        iziToast.error({
            title: 'Error',
            message: "The search query cannot be empty. Please enter a valid query!",
        });
        return; 
    }
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    fetchImages(searchQuery.trim())
    .then(images => {
        setTimeout(() => {
            loader.style.display = 'none';
            searchInput.value = ''; 
        }, 1000); 
        if (!Array.isArray(images.hits) || images.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "No images found. Please try a different query!",
            });
            return; 
        }
        renderGalleryItems(images.hits);
    })
    .catch(error => {
        setTimeout(() => {
            loader.style.display = 'none';
            searchInput.value = ''; 
        }, 1000);
        iziToast.error({
            title: 'Error',
            message: "Failed to load images. Please try again!",
        });
    })
       
});




