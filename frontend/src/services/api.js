import axios from 'axios';
const API_URL = `http://localhost:3000`;

export const login = (email, password) => {
    return axios.post(`${API_URL}/auth/signin`, { email, password });
};

export const getWords = (query = '') => { 
    return axios.get(`${API_URL}/entries/en`); 
};

export const getWordDetails = (word) => { 
    return axios.get(`${API_URL}/entries/en/${word}`); 
};

export const addFavorite = (word) => {
    return axios.post(`${API_URL}/entries/en/${word}/favorite`); 
};

export const removeFavorite = (word) => { 
    return axios.delete(`${API_URL}/entries/en/${word}/unfavorite`);
 };
