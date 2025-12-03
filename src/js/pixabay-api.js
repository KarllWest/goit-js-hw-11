import axios from "axios";

const searchPhotos = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '53534857-a2006fa0c5db5f85458f6ce50',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    },
});

export function getImagesByQuery(query) {
    return searchPhotos.get('', { params: { q: query } })
        .then(res => res.data.hits)
        .catch(error => {
            throw error
        });
}