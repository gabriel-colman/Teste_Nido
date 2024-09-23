import React, { useEffect, useState } from 'react';
import { getWords } from '../services/api';
import WordCard from '../components/WordCard';

const Home = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords().then(response => {
      setWords(response.results);
    }).catch(error => {
      console.error('Erro ao carregar palavras:', error);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Word List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {words.length > 0 ? (
          words.map(word => (
            <WordCard key={word._id} word={word} />
          ))
        ) : (
          <p>Nenhuma palavra encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
