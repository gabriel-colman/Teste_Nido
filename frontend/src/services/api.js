import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Função para obter todas as palavras
export const getWords = async () => {
  try {
    const response = await axios.get(`${API_URL}/entries/en`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter palavras:', error);
    throw error;
  }
};

// Função para adicionar uma palavra aos favoritos
export const addFavorite = async (word) => {
  try {
    const response = await axios.post(`${API_URL}/entries/en/${word}/favorite`);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar aos favoritos:', error);
    throw error;
  }
};

// Função para remover uma palavra dos favoritos
export const removeFavorite = async (word) => {
  try {
    const response = await axios.delete(`${API_URL}/entries/en/${word}/unfavorite`);
    return response.data;
  } catch (error) {
    console.error('Erro ao remover dos favoritos:', error);
    throw error;
  }
};

// Função para login (dummy para teste)
export const login = async (credentials) => {
  // Isso é apenas um exemplo, implemente com base no backend real
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
