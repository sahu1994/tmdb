import axios from './request.service';

import { Enviornment } from '../enviornment';

const API_KEY = Enviornment.tmdbAPIKey;

export const searchMovies = async (query) => {
    try {
        const res = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getMovieDetailById = async (movieId) => {
    try {
        const res = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return res.data;
    } catch (error) {
        throw error;
    }
}