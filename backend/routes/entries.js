const express = require('express');
const router = express.Router();
const { getEntries, getEntryDetails, addFavorite, removeFavorite, addWord } = require('../controllers/entryController');

// Rota para obter as entradas com paginação
router.get('/en', getEntries);

// Rota para adicionar uma nova palavra
router.post('/en', addWord);

// Rota para obter detalhes de uma palavra específica
router.get('/en/:word', getEntryDetails);

// Rota para adicionar uma palavra aos favoritos
router.post('/en/:word/favorite', addFavorite);

// Rota para remover uma palavra dos favoritos
router.delete('/en/:word/unfavorite', removeFavorite);

module.exports = router;
