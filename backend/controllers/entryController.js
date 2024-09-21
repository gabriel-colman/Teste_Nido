const axios = require('axios');
const Word = require('../models/Word');
const History = require('../models/History');

exports.getEntries = async (req, res) => {
  // Implementação de busca de palavras com paginação
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
  };

  try {
    const words = await Word.paginate({}, options);
    res.status(200).json(words);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEntryDetails = async (req, res) => {
  // Implementação de detalhes da palavra e histórico
  const { word } = req.params;

  try {
    const wordDetails = await
      Word.findOne({ word });
    const history = await
      History.find({ word }).sort({ createdAt: 'desc' });

    if (!wordDetails) {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0];
      const { word, phonetics, meanings } = data;
      const newWord = new Word({ word, phonetics, meanings });
      await newWord.save();
      res.status(200).json({ word: newWord, history });
    }
    res.status(200).json({ word: wordDetails, history });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFavorite = async (req, res) => {
  // Implementação de adicionar aos favoritos

  const { word } = req.params;
  const { user } = req;

  try {
    const wordDetails = await
      Word
        .findOne({ word })
        .select('word phonetics meanings');

    if (!wordDetails) {
      return res.status(404).json({ message: 'Word not found' });
    }

    const history = new History({ word, user: user._id });
    await history.save();

    user.favorites.push(wordDetails);
    await user.save();

    res.status(200).json({ message: 'Word added to favorites' });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }

};

exports.removeFavorite = async (req, res) => {
  // Implementação de remover dos favoritos

  const { word } = req.params;
  const { user } = req;

  try {
    const wordDetails = await
      Word
        .findOne({ word })
        .select('word phonetics meanings');

    if (!wordDetails) {
      return res.status(404).json({ message: 'Word not found' });
    }

    const history = await
      History.findOne({ word, user: user._id });

    if (!history) {
      return res.status(404).json({ message: 'Word not found in favorites' });
    }

    await history.remove();

    user.favorites = user.favorites.filter(favorite => favorite.word !== word);
    await user.save();

    res.status(200).json({ message: 'Word removed from favorites' });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }

};
