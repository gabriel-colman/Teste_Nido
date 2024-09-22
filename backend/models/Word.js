const mongoose = require('mongoose');
const wordSchema = new mongoose.Schema({
  word: String,
  phonetics: Array,
  meanings: Array
});

module.exports = mongoose.model('Word', wordSchema);
