// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export function fetchImages (query){
    
        const baseUrl = 'https://pixabay.com';
        const apiKey = '44464847-e125504310873b884f25bab7c';
        const endPoint = '/api/';
        
        const params = new URLSearchParams({
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        });
        return fetch(`${baseUrl}${endPoint}?${params}`) 
          .then(response => response.json())
          .then(data => {
            if(data.hits.length === 0){
                iziToast.error({
                    title: 'Error',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            } else {
                console.log(data.hits);
            }
            return data.hits;
          }).catch(error => {
            console.error('Error:', error);
          });
};
