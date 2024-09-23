import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da API backend
});

// Função para obter a lista de palavras com paginação
export const getWords = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/entries/en`, { params: { page, limit } });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter palavras:', error.message);
    throw error;
  }
};

// Função para obter detalhes de uma palavra específica
export const getWordDetails = async (word) => {
  try {
    const response = await api.get(`/entries/en/${word}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes da palavra:', error.message);
    throw error;
  }
};

// Função para adicionar uma palavra aos favoritos
export const addFavorite = async (word) => {
  try {
    const response = await api.post(`/entries/en/${word}/favorite`);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar palavra aos favoritos:', error.message);
    throw error;
  }
};

// Função para remover uma palavra dos favoritos
export const removeFavorite = async (word) => {
  try {
    const response = await api.delete(`/entries/en/${word}/unfavorite`);
    return response.data;
  } catch (error) {
    console.error('Erro ao remover palavra dos favoritos:', error.message);
    throw error;
  }
};

// Função para realizar login
export const login = async (email, password) => {
  try {
    const response = await api.post(`/auth/signin`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Erro ao realizar login:', error.message);
    throw error;
  }
};
