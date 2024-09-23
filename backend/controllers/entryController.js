const Word = require('../models/Word');
const axios = require('axios');

// Função para listar as palavras com paginação
exports.getEntries = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const words = await Word.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Word.countDocuments();
    res.json({
      results: words,
      totalDocs: count,
      totalPages: Math.ceil(count / limit),
      page: page,
      hasNext: page * limit < count,
      hasPrev: page > 1,
    });
  } catch (err) {
    console.error('Erro ao obter palavras:', err.message);
    res.status(500).json({ message: 'Erro ao obter palavras' });
  }
};

// Função para obter os detalhes de uma palavra
exports.getEntryDetails = async (req, res) => {
  try {
    const { word } = req.params;
    let entry = await Word.findOne({ word });

    if (!entry) {
      console.log(`Buscando detalhes da palavra: ${word} na API externa.`);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.data && response.data.length > 0) {
        entry = new Word({
          word: response.data[0].word,
          phonetics: response.data[0].phonetics,
          meanings: response.data[0].meanings,
          license: response.data[0].license,
          sourceUrls: response.data[0].sourceUrls,
        });
        await entry.save();
      } else {
        return res.status(404).json({ message: 'Palavra não encontrada na API externa' });
      }
    }

    res.json(entry);
  } catch (err) {
    console.error('Erro ao obter detalhes da palavra:', err.message);
    res.status(500).json({ message: 'Erro ao obter detalhes da palavra' });
  }
};

// Função para adicionar aos favoritos
exports.addFavorite = async (req, res) => {
  try {
    const { word } = req.params;
    const user = req.user;

    user.favorites.push(word);
    await user.save();

    res.status(200).json({ message: 'Palavra adicionada aos favoritos' });
  } catch (err) {
    console.error('Erro ao adicionar palavra aos favoritos:', err.message);
    res.status(500).json({ message: 'Erro ao adicionar palavra aos favoritos' });
  }
};

// Função para remover dos favoritos
exports.removeFavorite = async (req, res) => {
  try {
    const { word } = req.params;
    const user = req.user;

    user.favorites = user.favorites.filter((fav) => fav !== word);
    await user.save();

    res.status(200).json({ message: 'Palavra removida dos favoritos' });
  } catch (err) {
    console.error('Erro ao remover palavra dos favoritos:', err.message);
    res.status(500).json({ message: 'Erro ao remover palavra dos favoritos' });
  }
};
