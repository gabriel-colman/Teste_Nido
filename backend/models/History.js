const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  word: String,
  viewedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);
