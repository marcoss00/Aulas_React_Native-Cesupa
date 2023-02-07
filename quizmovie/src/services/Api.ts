import axios from "axios";

export const API_KEY = '7247b2d3';
export const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

export const api = axios.create({
    baseURL: API_URL,
})

export const getMovies = async (title: string) => {
    try {
        return await api.get(`${API_URL}&s=${title}`)
    } catch (erro) {
        throw new Error('deu bug')
    }
}

