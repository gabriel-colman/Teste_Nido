const express = require('express');
const router = express.Router();
const { getProfile, getHistory, getFavorites } = require('../controllers/userController');

router.get('/me', getProfile);
router.get('/me/history', getHistory);
router.get('/me/favorites', getFavorites);

module.exports = router;
