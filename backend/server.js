const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurações
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', require('./routes/auth'));
app.use('/entries', require('./routes/entries'));
app.use('/user', require('./routes/user'));

// Conexão com MongoDB e Inicialização do Servidor
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
