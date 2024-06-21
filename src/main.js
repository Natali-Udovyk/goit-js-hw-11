
import { fetchImages } from './js/pixabay-api.js';
import { renderGalleryItems } from './js/render-functions.js';
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const searchQuery = searchInput.value;
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    fetchImages(searchQuery).then(images => renderGalleryItems(images))
    .then(() => {
        // Додаємо затримку перед приховуванням індикатора
        setTimeout(() => {
            loader.style.display = 'none';
            searchInput.value = ''; // Приховуємо індикатор після завантаження зображень
        }, 3000); // Затримка в 1000 мілісекунд (1 секунда)
    })
    .catch(error => {
        console.error('Error loading images:', error);
        setTimeout(() => {
            loader.style.display = 'none';
            searchInput.value = ''; // Також приховуємо індикатор у випадку помилки
        }, 3000);
    });
    
});




