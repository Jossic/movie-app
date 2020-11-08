const axios = require('axios');
const BASE_URL = 'http://localhost:3000'
const MOVIE_DATA = []

const CATEGORY_DATA = [
    { id: '1', name: 'drama' },
    { id: '2', name: 'action' },
    { id: '3', name: 'comedie' },
    { id: '4', name: 'sci-fi' },
    { id: '5', name: 'romantique' },
    { id: '6', name: 'animation' },
    { id: '7', name: 'enfants' },
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            // reject('Impossible de donner les infos')
        }, 50);
    })
}


export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
        return res.data
    })
}

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2.5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie)
        .then(res => res.data)
}

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}