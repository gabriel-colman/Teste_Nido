const User = require('../models/User');
const History = require('../models/History');
const Favorite = require('../models/Favorite');

exports.getProfile = async (req, res) => {
  // Implementação do perfil do usuário

  const { user } = req;

  try {
    const profile = await
      User
        .findById(user._id)
        .select('username email');

    res.status(200).json(profile);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHistory = async (req, res) => {
  // Implementação do histórico

  const { user } = req;

  try {
    const history = await
      History
        .find({ user: user._id })
        .populate('word', 'word phonetics meanings');

    res.status(200).json(history);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFavorites = async (req, res) => {
  // Implementação dos favoritos

  const { user } = req;

  try {
    const favorites = await
      Favorite
        .find({ user: user._id })
        .populate('word', 'word phonetics meanings');

    res.status(200).json(favorites);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};
