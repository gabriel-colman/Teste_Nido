const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  // Implementação de signup
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  // Implementação de signin
  const { email, password } = req.body;

  try {
    const user = await User
      .findOne({ email })
      .select('+password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};
