const express = require('express');
const router = express.Router();
const { getEntries, getEntryDetails, addFavorite, removeFavorite } = require('../controllers/entryController');

router.get('/en', getEntries);
router.get('/en/:word', getEntryDetails);
router.post('/en/:word/favorite', addFavorite);
router.delete('/en/:word/unfavorite', removeFavorite);

module.exports = router;
