export function fetchImages (query){
    
        const baseUrl = 'https://pixabay.com';
        const apiKey = '44464847-e125504310873b884f25bab7c';
        const endPoint = '/api/';

        const params = new URLSearchParams({
            key: apiKey,
            q: query.trim(),
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        });
        return fetch(`${baseUrl}${endPoint}?${params}`) 
          .then((response) => { 
            if(!response.ok) {
              throw new Error('response.status');
            }
            return response.json()
          
          })
}

